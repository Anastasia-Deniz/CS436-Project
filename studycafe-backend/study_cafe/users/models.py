from django.db import models

class User(models.Model):
    username = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    goals = models.ManyToManyField('goals.Goal', related_name='user_goals')
    rewards = models.JSONField(default=list)

    def __str__(self):
        return self.username