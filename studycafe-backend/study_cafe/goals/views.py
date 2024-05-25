import requests
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Goal
from .serializers import GoalSerializer
from users.models import User
from rest_framework import status

def determine_reward(duration):
    pass

@api_view(['POST'])
def add_goal(request):
    data = request.data
    user_id = data.get('user_id')
    user = get_object_or_404(User, id=user_id)
    goal = Goal.objects.create(
        title=data['title'],
        description=data['description'],
        duration=data['duration'],
        user=user
    )
    user.goals.add(goal)
    user.save()
    return Response(GoalSerializer(goal).data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def get_goal(request, goalId):
    goal = get_object_or_404(Goal, id=goalId)
    return Response(GoalSerializer(goal).data)

@api_view(['GET'])
def get_goals(request):
    goals = Goal.objects.all()
    return Response(GoalSerializer(goals, many=True).data)

@api_view(['PUT'])
def update_goal(request, goalId):
    goal = get_object_or_404(Goal, id=goalId)
    serializer = GoalSerializer(goal, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_goal(request, goalId):
    goal = get_object_or_404(Goal, id=goalId)
    goal.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def complete_goal(request, goalId):
    goal = get_object_or_404(Goal, id=goalId)
    goal.is_complete = True
    goal.save()

    # Call the Cloud Function to determine the reward
    reward_response = requests.post(
        settings.REWARD_FUNCTION_URL,
        json={'duration': goal.duration}
    )
    reward = reward_response.json().get('reward')

    user = goal.user
    user.rewards.append(reward)
    user.save()

    return Response(GoalSerializer(goal).data)