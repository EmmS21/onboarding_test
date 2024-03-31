from django.http import JsonResponse
from .models import Course

def course_list(request):
    courses_list = [
        {"Course Name": "Onboarding", "Course Duration": "12 hours", "Progress": 25},
        {"Course Name": "Ethics", "Course Duration": "10 hours", "Progress": 55},
        {"Course Name": "Conflict Resolution", "Course Duration": "20 hours", "Progress": 75},
        {"Course Name": "Staying Calm", "Course Duration": "8 hours", "Progress": 90},
        {"Course Name": "Reading the Room", "Course Duration": "18 hours", "Progress": 5},
        {"Course Name": "Is it a Person or an AI?", "Course Duration": "20 hours", "Progress": 75}
    ]

    return JsonResponse(courses_list, safe=False)
