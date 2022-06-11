import sys;
from urllib import response
from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from datetime import datetime, timedelta
import pandas as pd
from sklearn import preprocessing
import joblib
import os.path
import numpy as np
np.set_printoptions(threshold=np.inf)
df = pd.read_csv('./predict/TrainingData.csv', header=0, encoding='unicode_escape')
df.drop(['Id','Income','Risk_Flag'], axis='columns', inplace=True)
data = [{'Married/Single':sys.argv[3],
            'House_Ownership':sys.argv[4], 'Car_Ownership':sys.argv[5], 'Profession': sys.argv[6],
            'CITY':sys.argv[7], 'STATE':sys.argv[8],'Age': int(sys.argv[1]), 'Experience':int(sys.argv[2]),  'CURRENT_JOB_YRS': int(sys.argv[9]),'CURRENT_HOUSE_YRS':int(sys.argv[10]),
        }]

df = pd.concat([df, pd.DataFrame(data)], ignore_index=True)
cols = ['Married/Single', 'House_Ownership', 'Car_Ownership', 'Profession', 'CITY', 'STATE','Age', 'Experience',  'CURRENT_JOB_YRS', 'CURRENT_HOUSE_YRS']
df= df[cols]
# Encode
le = preprocessing.LabelEncoder()

df['Age'] = le.fit_transform(df['Age'])
df['Experience'] = le.fit_transform(df['Experience'])
df['Married/Single'] = le.fit_transform(df['Married/Single'])
df['House_Ownership'] = le.fit_transform(df['House_Ownership'])
df['Car_Ownership'] = le.fit_transform(df['Car_Ownership'])
df['Profession'] = le.fit_transform(df['Profession'])
df['CITY'] = le.fit_transform(df['CITY'])
df['STATE'] = le.fit_transform(df['STATE'])
df['CURRENT_JOB_YRS'] = le.fit_transform(df['CURRENT_JOB_YRS'])
df['CURRENT_HOUSE_YRS'] = le.fit_transform(df['CURRENT_HOUSE_YRS'])
df = df.tail(1)
if (sys.argv[11] == "K Nearest Neighbors"):
  Risk_Flag_KNN_model = joblib.load("./predict/KNN_model.pkl")
  Risk_Flag_Prediction = Risk_Flag_KNN_model.predict(df)
  print(Risk_Flag_Prediction)
elif(sys.argv[11] == "Logistic Regression"):
  Risk_Flag_LR_model = joblib.load("./predict/LR_model.pkl")
  Risk_Flag_Prediction = Risk_Flag_LR_model.predict(df)
  print(Risk_Flag_Prediction)
elif(sys.argv[11] == "Decision Tree"):
  Risk_Flag_LR_model = joblib.load("./predict/DT_model.pkl")
  Risk_Flag_Prediction = Risk_Flag_LR_model.predict(df)
  print(Risk_Flag_Prediction)
elif(sys.argv[11] == "Random Forest"):
  Risk_Flag_LR_model = joblib.load("./predict/RF_model.pkl")
  Risk_Flag_Prediction = Risk_Flag_LR_model.predict(df)
  print(Risk_Flag_Prediction)
else:
  print("Model not found")