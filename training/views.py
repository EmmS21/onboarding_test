from django.http import JsonResponse
from django.views.decorators.http import require_GET
from .models import do_training

@require_GET
def train_model(request):
    trainRes = do_training()
    finalResult = {'score': trainRes}
    return JsonResponse(finalResult)
