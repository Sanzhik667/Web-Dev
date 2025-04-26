from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from .serializers import RegisterSerializer
from rest_framework.views import APIView


User = get_user_model()

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            "token": token.key,
            "user_id": user.pk,
            "email": user.email
        }, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    def post(self, request):
        # Логика логина
        return Response({"message": "Login successful!"}, status=status.HTTP_200_OK)