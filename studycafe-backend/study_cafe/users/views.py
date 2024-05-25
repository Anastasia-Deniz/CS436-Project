from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404
from .models import User
from .serializers import UserSerializer
from goals.serializers import GoalSerializer

@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
    user = User.objects.create(username=username, password=password)
    return Response(UserSerializer(user).data)

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    try:
        user = User.objects.get(username=username, password=password)
    except User.DoesNotExist:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    return Response({'id': user.id, 'username': user.username})

@api_view(['GET'])
def get_user(request):
    user_id = request.query_params.get('user_id')
    user = get_object_or_404(User, id=user_id)
    return Response(UserSerializer(user).data)

@api_view(['GET'])
def get_user_goals(request):
    user_id = request.query_params.get('user_id')
    user = get_object_or_404(User, id=user_id)
    goals = user.goals.all()
    return Response(GoalSerializer(goals, many=True).data)

@api_view(['GET'])
def get_user_rewards(request):
    user_id = request.query_params.get('user_id')
    user = get_object_or_404(User, id=user_id)
    return Response(user.rewards, status=status.HTTP_200_OK)