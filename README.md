The file that contains my code is in the "logic" javascript file in the js folder in the static folder.

Here I created a javascript file that generates a map using the OpenStreetMap tile layer. The objective was to find earthquake data of various magnitudes within a period of time.
For this I chose to do earthquakes of all magnitudes in the past day. (The JSON file which contains this data is updated every minute.)

In the code, I first had to initialize a map feature which established a center and zoom level. I chose [0, 0] as my center and a zoom level of 2.
Next I added the OpenStreetMap tile to the map that I initialized.
In order to retrieve the data that would be used for analysis, I used the fetch function on the json file that contained earthquake information from the past day.
Variables were set that retrieved coordinates, including latitude, longitude, and depth, magnitude, and place.
Using these, markers were set on locations provided by the latitude and longitude. The size of the markers were based on magnitude and the different colors correspond to the depth.
  A function called "getColorForDepth" is utilized. It uses an RGB code that can be manually changed to make the markers appear within any color scale desired.
  One of the three RGB arguments takes the depth of an earthquake, divides it by 100, then subtracts this new number from 1, then multiplies by 255. This allows for greater depths to appear in darker colors and more shallow depths in lighter colors.
  Here specifically I set the R (red) value to 255, the B (blue) value to 0, and the G (green) value is set to change depending on depth, making the markers appear from yellow to red.
Upon clicking a marker, a popup box appears, displaying the location, latitude, and longitude of the place, and the magnitude and depth of the earthquake.
A legend used to show the depth ranges were included.
  I set the ranges for the data based on the depth in the earth where the earthquakes occurred, and the colors appropriate for the ranges. They will change if you change the RGB in the "getColorForDepth" function.

Data updates on a minute-by-minute basis so if you examine the map of earthquakes today, it may not be the same results tomorrow.
