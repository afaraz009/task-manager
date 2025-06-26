# 🐛 Task Manager - Debugging Challenge

## Overview
Welcome to the Task Manager debugging challenge! This React application has several intentional bugs that you need to find and fix. The app should allow users to add tasks, mark them as complete, delete them, and filter them by status.

## Getting Started
1. Run `npm install` to install dependencies
2. Run `npm start` to start the development server
3. Open http://localhost:3000 in your browser
4. Open browser developer tools (F12) to see console errors

## Expected Functionality
The Task Manager should have these features:
- ✅ Add new tasks using the input field and "Add" button
- ✅ Mark tasks as complete/incomplete by clicking the checkbox
- ✅ Delete tasks using the "Delete" button
- ✅ Filter tasks using "All", "Active", and "Completed" buttons
- ✅ Persist data in browser's local storage (survives page refresh)
- ✅ Responsive design that works on mobile devices

## 🔍 Issues to Debug

### Issue #1: Tasks Won't Toggle ⚠️
**Problem**: When you click the checkbox to mark a task as complete, nothing happens.
**Expected**: Task should be marked as complete with a strikethrough effect.
**Hint**: Check the state management in App.js

### Issue #2: Delete Button Not Working ⚠️
**Problem**: Clicking the "Delete" button doesn't remove tasks.
**Expected**: Task should be removed from the list immediately.
**Hint**: Look at event handlers and prop passing.

### Issue #3: Filter Buttons Show Wrong Tasks ⚠️
**Problem**: "Active" shows completed tasks, "Completed" shows active tasks.
**Expected**: "Active" should show uncompleted tasks, "Completed" should show completed tasks.
**Hint**: Check the filtering logic conditions.

### Issue #4: Data Doesn't Persist ⚠️
**Problem**: When you refresh the page, all tasks disappear.
**Expected**: Tasks should be saved and restored from local storage.
**Hint**: Check the localStorage implementation.

### Issue #5: Console Warnings ⚠️
**Problem**: React is showing warnings in the browser console about missing keys.
**Expected**: No warnings in the console.
**Hint**: Check list rendering and key props.

### Issue #6: Form Doesn't Clear Properly ⚠️
**Problem**: After adding a task, the input field shows empty but still contains the old text.
**Expected**: Input field should be completely cleared after adding a task.
**Hint**: Check the timing of state updates.

### Issue #7: Mobile Layout Broken 📱⚠️
**Problem**: On mobile/small screens, the layout overflows and looks broken.
**Expected**: Layout should be responsive and work on all screen sizes.
**Hint**: Check CSS classes and responsive design.

## 🛠️ Debugging Tips

1. **Use Browser DevTools**:
   - Check Console tab for JavaScript errors
   - Use React DevTools to inspect component state
   - Use Network tab to see if data is being saved to localStorage

2. **Common React Debugging Approaches**:
   - Add `console.log()` statements to track data flow
   - Check if event handlers are being called
   - Verify state updates are happening correctly
   - Ensure props are being passed correctly

3. **Testing Your Fixes**:
   - Add several tasks and try all operations
   - Test filtering with different task states
   - Refresh the page to test persistence
   - Test on mobile/small screen sizes

## 📚 Resources You Can Use
- React Documentation: https://reactjs.org/docs
- MDN Web Docs: https://developer.mozilla.org
- Stack Overflow for specific error messages
- Browser DevTools documentation

## ✅ Success Criteria
Your debugging is complete when:
- [ ] You can add new tasks
- [ ] You can toggle task completion status
- [ ] You can delete tasks
- [ ] Filter buttons work correctly
- [ ] Tasks persist after page refresh
- [ ] No console warnings appear
- [ ] Layout works on mobile devices
- [ ] All functionality works smoothly

## 🕐 Time Estimate
This challenge should take approximately 2-3 hours depending on your debugging experience.

Good luck debugging! 🚀