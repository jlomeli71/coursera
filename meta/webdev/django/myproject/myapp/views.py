from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound

# Create your views here.

def home(request):
    return HttpResponse("<h1> Welcome to Little Lemon! </h1>")

def about(request):
    return HttpResponse("<h1> About us </h1>")

def menu(request):
    return HttpResponse("<h1> Menu for Little Lemon </h1>")

def book(request):
    return HttpResponse("<h1> Make a booking </h1>")

def drinks(request, drink_name):
    drink = {
        'mocha': 'type of coffe',
        'tea': 'type of beverage',
        'lemonade': 'type of refreshment',
        'chocolate': "God's berverage"
    }
    choice_of_drink = drink[drink_name]
    return HttpResponse(f"<h2> {drink_name} </h2>" + choice_of_drink)
