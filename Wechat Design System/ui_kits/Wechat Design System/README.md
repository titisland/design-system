# Event Agent — UI Kit

Pixel-oriented recreation of 6 key screens from the attached Figma for Veeva China CRM.

## Screens
1. **Event List** (`/Chat`) — activity list + filter bar + dual FAB (home / AI). Toggleable AI hint bubble.
2. **Doctor Detail** (`/Chat/section`) — hero card, tag chips, tabbed info rows, footer actions.
3. **AI Event Agent Chat** (`/Chat/section`) — greeting, user bubble, thinking stream, bulleted answer. Auto-advances; replay button restarts.
4. **Approval Insights** (`/Approval-Insights/frame`) — gradient sheet with segmented control swapping two card stacks (Risk analysis vs Meeting metrics).
5. **Attendee Recommendation** (`/Attendee-Recommendation/Attendee-Recommendation`) — AI-recommended doctor list with checkbox selection, live "已选N人" count in header, and bottom action bar.
6. **Policy Helper** (`/Policy-Helper/Policy-Helper---2`) — dim underlay + rounded bottom sheet titled "CRM Bot" with gradient user bubble and numbered policy list.

## Files
- `Shell.jsx` — Phone frame, NavBar, StatusBar, Fab, Pill, Tag, AiBubble.
- `Icons.jsx` — inline SVG icons (fixes MIME issues). Figma icons + line-art additions.
- `Screens.jsx` — EventListScreen, DoctorScreen, ChatScreen.
- `MoreScreens.jsx` — ApprovalInsightsScreen, AttendeeScreen, PolicyHelperScreen.
- `index.html` — side-by-side demo with all six screens.

## Notes
- 375×812 canvas per screen.
- Approval Insights is rendered at 375 (Figma source is 400); rows/data scale down identically.
- All icons are inline SVG — no external SVG files loaded at runtime.
- Gradient user bubble in Policy Helper uses `#45D4FB → #57E9F2 → #9EFBD3` as in Figma.
