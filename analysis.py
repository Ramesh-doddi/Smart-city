import pandas as pd
import matplotlib.pyplot as plt

# Load data
traffic_data = pd.read_csv('traffic_data.csv')
pollution_data = pd.read_csv('pollution_data.csv')
energy_data = pd.read_csv('energy_data.csv')

# Traffic Data Analysis
plt.figure(figsize=(12, 6))
plt.subplot(1, 3, 1)
plt.plot(traffic_data['timestamp'], traffic_data['count'])
plt.title('Traffic Count Over Time')
plt.xlabel('Time')
plt.ylabel('Count')

# Pollution Data Analysis
plt.subplot(1, 3, 2)
plt.plot(pollution_data['timestamp'], pollution_data['level'])
plt.title('Pollution Levels Over Time')
plt.xlabel('Time')
plt.ylabel('Pollution Level')

# Energy Data Analysis
plt.subplot(1, 3, 3)
plt.plot(energy_data['timestamp'], energy_data['consumption'])
plt.title('Energy Consumption Over Time')
plt.xlabel('Time')
plt.ylabel('Consumption')

plt.tight_layout()
plt.show()
