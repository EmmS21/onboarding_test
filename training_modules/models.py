from django.db import models

class Course(models.Model):
    course_name = models.CharField(max_length=255)
    course_duration = models.PositiveIntegerField(help_text="Duration in hours")
    progress = models.PositiveIntegerField(help_text="Progress percentage (0-100)")
