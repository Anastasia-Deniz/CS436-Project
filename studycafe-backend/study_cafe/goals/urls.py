from django.urls import path
from .views import add_goal, get_goal, get_goals, update_goal, delete_goal, complete_goal

urlpatterns = [
    path('addGoal', add_goal),
    path('get/<int:goalId>', get_goal),
    path('getGoals', get_goals),
    path('update/<int:goalId>', update_goal),
    path('delete/<int:goalId>', delete_goal),
    path('complete/<int:goalId>', complete_goal),
]