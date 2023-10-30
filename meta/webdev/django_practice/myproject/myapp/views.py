# from http.client import HTTPResponse
from django.shortcuts import render
from django.http import HttpResponse

# Added in the forms lab
from django.shortcuts import render
from myapp.forms import BookingForm

# Create your views here.

def home(request):
    path = request.path
    method = request.method 
    content = """
    <center><h2>Testing django request response objects</h2>
    <p>Request path: {}</p>
    <p>Request method: {}</p></center>
    """.format(path, method)
    content2 = "Welcome to Little Lemon!"
    return HttpResponse(content2)

def drinks(request, drink_name):
    drink = {
        'mocha': 'type of coffe',
        'tea': 'type of hot berverage',
        'lemonade': 'type of refreshment',
        'horchata': 'type of latin berverage',
    }
    choice_of_drink = drink[drink_name]
    return HttpResponse(f"<h2>{drink_name}: " + choice_of_drink)

def about(request):
    about_content = {'about': "Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day."}
    return render(request, "about.html", {'content': about_content})
    # return HttpResponse("About us")

def menu(request):
    about_content = {'about': "Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day."}
    return render(request, "menu.html", {'content': about_content})
    # return HttpResponse("Menu")

def book(request):
    return HttpResponse("Make a booking")

def form_view(request):
    form = BookingForm()
    if request.method == 'POST':
        form = BookingForm(request.POST)
        if form.is_valid():
            form.save()
    context = {"form" : form}
    return render(request, "booking.html", context)