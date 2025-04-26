from django.db import models

class Subject(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    default="",
    blank=True 

    def __str__(self):
        return self.name

class Topic(models.Model):
    name = models.CharField(max_length=100)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE,related_name='topics')
    order = models.PositiveIntegerField()

    def __str__(self):
        return self.name

class Lesson(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='lessons')
    title = models.CharField(max_length=100)
    content = models.TextField()
    youtube_url = models.URLField(
        max_length=200,
        verbose_name='Ссылка на YouTube',
        help_text='https://www.youtube.com/watch?v=UtJEXMvrfRs'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title