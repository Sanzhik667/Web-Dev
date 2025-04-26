from rest_framework import serializers
from .models import Subject, Topic, Lesson
from django.conf import settings

class TopicSerializer(serializers.ModelSerializer):
    class Meta():
        model = Topic
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    topics = TopicSerializer(many = True, read_only = True)
    class Meta():
        model = Subject
        fields = '__all__'

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'