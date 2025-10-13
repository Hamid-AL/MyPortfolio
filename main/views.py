from django.shortcuts import render

# Create your views here.
# views.py
from django.shortcuts import render

def home(request):
    return render(request, "main/home.html")


def about(request):
    return render(request, "main/about.html")

def resume(request):
    return render(request, "main/resume.html")

def projects(request):
    return render(request, "main/projects.html")

def experience(request):
    return render(request, "main/experience.html")