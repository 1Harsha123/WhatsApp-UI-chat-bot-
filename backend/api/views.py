from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def send_message(request):
    if request.method == "POST":
        data = json.loads(request.body)
        phone = data.get("phone")
        message = data.get("message")
        print(f"Simulating sending WhatsApp message to {phone}: {message}")
        return JsonResponse({"status": "✅ Message sent successfully (simulated)"})
    else:
        return JsonResponse({"error": "Only POST method is allowed"}, status=405)
