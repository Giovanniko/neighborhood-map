## Neighborhood Map
### Introduction: 
To get started please run up index.html in your favorite browser.

This project required that the map should be of an area near where you live or a neighborhood of your choosing. A list of your favorites should be filterable with user input and provide additional information when clicked.

The purpose of this project was to use concepts from `Knockout` and a 3rd party API. The `MVVP` design structure of `Knockout` would introduce students to more advanced code structuring techniques. The interactive portion of `Google Maps` and the other 3rd party `API` would provide first-hand experience integrating external data sources from the web. 

___

## Project Guidelines:
(Adapted from Udacity's Project guidelines)
- Write code required to display map markers identifying at least 5 locations that you are interested in within your neighborhood. The app should display those locations by default when the page is loaded.
- Implement a list view of the set of locations.
- Provide a filter option that uses an input field to filter both the list view and the map markers displayed by default on load. The list view and the markers should update accordingly in real time.
- Providing a search function through a third-party API is not enough to meet specifications. This filter can be a text input or a dropdown menu.
- Add functionality using third-party APIs to provide information when a map marker or list view entry is clicked.
- Provide attribution to the data sources/APIs you use.
- Add functionality to open an infoWindow with information, such as location name, when either a location is selected from the list view or its map marker is selected directly.
- The app's interface should be intuitive to use. For example, the input text area to filter locations should be easy to locate. It should be easy to understand what set of locations is being filtered.
- Selecting a location via list item or map marker should cause the map marker to bounce or in some other way animate to indicate that the location has been selected and associated info window should open above the map marker with additional information.
- `Knockout` must be used to handle the list, filter, and any other information on the page that is subject to changing state. Things that should not be handled by Knockout include anything the Maps API is used for: creating markers, tracking click events on markers, making the map, refreshing the map. Tracking click events on list items should be handled with Knockout. Creating your markers as a part of your ViewModel is allowed (and recommended), but creating them as Knockout observables is not.
- All data APIs used in the project should load asynchronously and errors should be handled gracefully. In case of error (e.g. in a situation where a third party API does not return the expected result) the webpage should do one of the following: A message is displayed notifying the user that the data can't be loaded, **OR There are no negative repercussions to the UI.**

## Design Criteria ##

The design criteria can be found at [Udacity's Project Rubric](https://review.udacity.com/#!/rubrics/17/view)

## UI and Instructions:

On loading the page the user will be centered on the map at Oviedo, España. A streetview panoramic picture appears above the map. 

Below the headline of the page, a search bar is available for typing searches. On typing, depending on the device in use, a list of favorites will appear either above or to the side of the streetview section.

At the same time the list adjusts to the search, animated markers wil also appear and drop down onto the map. The list items and markers can be clicked and an info box will appear. When the marker or list item is clicked the Streetview picture will change. If no picture is available, a window alert box will prompt the user. 

The info box shows locally stored data. However, it also inclueds a `Nearby Places` button that performs a Foursquare search. The search produces a number of returns currently not changeable by the user. Subsequent clicking on these Foursquare markers provides the stored data from the api call in a new info box. If a Foursqure web page url can be reached, the link is made live to that page. Otherwise an alert is pushed to the window to prompt the user. The new info box also has a `Nearby Places` button. The user can then chain together nearby events and move around the map with Foursquare suggestions if desired.

The user can also choose to ignore the favorites and freely roam the streets. Clicking on a location will place a marker. The subsequent marker will also have an info box that opens on a click. The box provides some location data from Google. Once again the Streetview picture should show a new picture or an alert when none is available. 

The search box also provides the functionality of a standard Google Maps autocomplete search box. A small drop down list provides a list of filtered suggestions depending on the user's typed input. When the `enter` key is pressed a set of Google icons marking the search appear on the map. These markers when clicked will once again will show an info box. The box shows Google Maps powered data, a `Nearby Button` and a rating and webpage if one is available. Once again the user can search Foursquare for venues near by.

In the top right corner is a half-eaten hamburger than can be squooshed to toggle the favorites list out of view. The interface also provides a set of buttons between the Streetview and Google Maps sections. From here both these sections can also be toggle out of view. There are two buttons to clear Streetview roaming markers and Foursquare markers from the map. The autocomplete markers are removed by starting to type in the search box. These additional options allow the user to concentrate on an area of interest and remove clutter.

The idea is to give the user as many different options to explore the area as possible while maintaining. Keeping the functionality similar across services should make usage more intuitive.

---
### TODO:

Change the list of favorites to an editable list. The should be added and deleted and lists renamed and saved as desired.

Put a filter for the Foursqure search for *type* search *radius* and minimum *rating* filter.

Add Geolocation and allow users to access Google's directions service with the standard options similar to a standard Google map.

Make autocomplete search bounds settings more restrictable.













