import React from 'react';

export function DateSelection({ formData, onChange }) {
  // Define special dates
  const specialDates = ['2025-01-13', '2025-01-14', '2025-01-29', '2025-02-03', '2025-02-12', '2025-02-26'];

  // Helper function to get the range of dates
  const getDateRange = (startDate, range) => {
    const dateRange = [];
    for (let i = 0; i < range; i++) {
      const dateToCheck = new Date(startDate);
      dateToCheck.setDate(dateToCheck.getDate() + i);
      dateRange.push(dateToCheck.toISOString().split('T')[0]);
    }
    return dateRange;
  };

  // Check if a date range matches special date rules
  const isDateRangeValid = (startDate, range, specialOnly) => {
    const dateRange = getDateRange(startDate, range);

    if (specialOnly) {
      return specialDates.some((specialDate) => dateRange.includes(specialDate));
    }

    return !specialDates.some((specialDate) => dateRange.includes(specialDate));
  };

  // Function to determine if a date should be disabled
  const isDateDisabled = (date) => {
    const accommodationType = formData.accommodationType;
    const range =
      accommodationType === '2days' || accommodationType === '2days_special'
        ? 2
        : accommodationType === '3days' || accommodationType === '3days_special'
        ? 3
        : 0;
    const specialOnly = accommodationType.includes('_special');
    return !isDateRangeValid(date, range, specialOnly);
  };

  const [alertMessage, setAlertMessage] = React.useState('');
  const [showAlert, setShowAlert] = React.useState(false);

  // Function to handle date change
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const accommodationType = formData.accommodationType;

    if (!isDateDisabled(selectedDate)) {
      onChange('checkIn', selectedDate);
      setShowAlert(false); // Hide alert when valid date is selected
    } else {
      if (accommodationType.includes('_special')) {
        setAlertMessage('Please select a special date or a date close to a special date.');
      } else {
        setAlertMessage('Please select another date as it includes special dates.');
      }
      setShowAlert(true);

      // Set timeout to hide alert after 3 seconds
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const alertStyles = {
    backgroundColor: 'white',
    color: '#e65100',
    border: '2px solid #e65100',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '1000',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    opacity: showAlert ? 1 : 0,
    transition: 'opacity 0.3s ease',
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
          Check-In Date
        </label>
        <input
          type="date"
          id="checkIn"
          value={formData.checkIn}
          onChange={handleDateChange}
          min="2025-01-12"
          max="2025-02-26"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>

      {showAlert && <div style={alertStyles}>{alertMessage}</div>}
    </div>
  );
}
