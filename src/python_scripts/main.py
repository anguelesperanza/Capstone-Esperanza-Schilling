# #this is the script that will handle creating the ML model. 
# #right now it does not do this. 

import csv
import pandas as pd

print("Hello World")

file = r'..\assets\books.csv'

books = pd.read_csv(file)

print(books)