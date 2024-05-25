from django.urls import path
from .views import register, login, get_user, get_user_goals, get_user_rewards

urlpatterns = [
    path('register', register),
    path('login', login),
    path('get', get_user),
    path('getGoals', get_user_goals),
    path('getRewards', get_user_rewards),
]