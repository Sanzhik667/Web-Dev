from rest_framework import generics
from .models import Topic, Subject, Lesson
from .serializers import TopicSerializer, SubjectSerializer, LessonSerializer

class SubjectListAPIView(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class TopicListAPIView(generics.ListCreateAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer

class LessonListAPIView(generics.ListCreateAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class SubjectDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    lookup_field = 'id'

class TopicDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    lookup_field = 'id'

class LessonDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    lookup_field = 'id'

class SubTopAPIView(generics.ListAPIView):
    serializer_class = TopicSerializer

    def get_queryset(self):
        subject_id = self.kwargs['id']
        return Topic.objects.filter(subject_id=subject_id)