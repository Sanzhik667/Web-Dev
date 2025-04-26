from .views import SubjectListAPIView, TopicListAPIView, LessonListAPIView, LessonDetailAPIView, SubjectDetailAPIView, TopicDetailAPIView, SubTopAPIView
from django.urls import path

urlpatterns = [
    path('topics/', TopicListAPIView.as_view(), name = 'topic-list'),
    path('topics/<int:pk>/', TopicDetailAPIView.as_view(), name = 'topics-detail'),
    path('subjects/', SubjectListAPIView.as_view(), name = 'subject-list'),
    path('subjects/<int:pk>/', SubjectDetailAPIView.as_view(), name = 'subject-detail'),
    path('lessons/<int:pk>/', LessonDetailAPIView.as_view(), name='lesson-detail'),
    path('lessons/', LessonListAPIView.as_view(), name = 'lesson-list'),
    path('subjects/<int:subject_id>/topics/', SubTopAPIView.as_view(), name='sub-top-list'),
]