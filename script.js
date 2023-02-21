
//This originally opens the Peanuts Before Tab before any function is called
document.getElementById('comingUpContent').style.display = 'none';
document.getElementById('pastEventsContent').style.display = 'none';
document.getElementById('eventsWeekTab').className = 'accordionPanelTab highlight';

// When called, this function closes the tabs of all the tabs
function hidePanels() {
  document.getElementById('comingUpContent').style.display = 'none';
  document.getElementById('pastEventsContent').style.display = 'none';
  document.getElementById('eventsWeekContent').style.display = 'none';
  document.getElementById('comingUpTab').className = 'accordionPanelTab';
  document.getElementById('pastEventsTab').className = 'accordionPanelTab';
  document.getElementById('eventsWeekTab').className = 'accordionPanelTab';
}

// This opens the Art Style Tab but closes the other ones when called
function showComingUp() {
  hidePanels();
  document.getElementById('comingUpContent').style.display = 'block';
  document.getElementById('comingUpTab').className = 'accordionPanelTab highlight';
}

// This opens the Peanuts after Tab but closes the other ones when called
function showPastEvents() {
  hidePanels();
  document.getElementById('pastEventsContent').style.display = 'block';
  document.getElementById('pastEventsTab').className = 'accordionPanelTab highlight';
}

// This opens the Peanuts Before Tab but closes the other ones when called
function showWeekContent() {
  hidePanels();
  document.getElementById('eventsWeekContent').style.display = 'block';
  document.getElementById('eventsWeekTab').className = 'accordionPanelTab highlight';
}