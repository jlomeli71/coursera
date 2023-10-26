from django.http import HttpResponse

def handler400(request, exception):
    return HttpResponse("400: Bad request!")

def handler403(request, exception):
    return HttpResponse("403: Response forbidden!")

def handler404(request, exception):
    return HttpResponse("404: Page not found!")

def handler500(request, exception):
    return HttpResponse("500: Server error!")