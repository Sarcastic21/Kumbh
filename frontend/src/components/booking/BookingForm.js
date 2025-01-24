import React from 'react';
import { BookingSteps } from './BookingSteps';
import { PersonalDetails } from './PersonalDetails';
import AccommodationDetails from './AccommodationDetails';
import { DateSelection } from './DateSelection';
import { GuestDetails } from './GuestDetails';

export function BookingForm() {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    name: '',
    phoneNumber: '',
    accommodationType: '',
    checkIn: '',
    adults: '',
    children: '',
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [selectedPackage, setSelectedPackage] = React.useState({
    title: 'Default Package',
    price: 1000,
  });

  const token = localStorage.getItem('token'); // Token for authentication

  // Handle form input changes
  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Reset current step data
  const handleResetStepData = () => {
    const initialData = {
      name: '',
      phoneNumber: '',
      accommodationType: '',
      checkIn: '',
      adults: '',
      children: '',
    };
    setFormData(initialData);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the token exists
    if (!token) {
      console.error('No token found. Please log in.');
      return;
    }

    // Prepare form data for the backend
    const bookingData = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      accommodationType: formData.accommodationType,
      checkIn: formData.checkIn,
      adults: formData.adults,
      children: formData.children,
      bookingPackage: selectedPackage.title,
      price: selectedPackage.price,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/bookings`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (response.ok) {
        console.log('Booking successfully submitted');
        setIsSubmitted(true);

        // Redirect based on accommodation type
        if (
          formData.accommodationType === '3days' ||
          formData.accommodationType === '2days'
        ) {
          window.location.href = 'https://pages.razorpay.com/pl_PgV7mF8ATwq6FC/view';
        } else if (
          formData.accommodationType === '3days_special' ||
          formData.accommodationType === '2days_special'
        ) {
          window.location.href = 'https://rzp.io/rzp/m6elSU2b';
        } else {
          console.error('Invalid accommodation type');
        }
      } else {
        console.error('Failed to submit booking');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  // Validate form based on the current step
  const isFormValid = () => {
    if (step === 1) {
      return formData.name && formData.phoneNumber;
    }
    if (step === 2) {
      return formData.accommodationType;
    }

    if (step === 3) {
      return formData.checkIn;
    }
    if (step === 4) {
      return formData.adults;
    }
    return true;
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Book Your Spiritual Journey
      </h2>

      <BookingSteps currentStep={step} />

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {step === 1 && (
          <PersonalDetails formData={formData} onChange={handleInputChange} />
        )}

        {step === 2 && (
          <AccommodationDetails
            formData={formData}
            onChange={handleInputChange}
            setSelectedPackage={setSelectedPackage}
          />
        )}

        {step === 3 && (
          <DateSelection formData={formData} onChange={handleInputChange} />
        )}

        {step === 4 && (
          <GuestDetails formData={formData} onChange={handleInputChange} />
        )}

        <div className="flex justify-between pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={() => {
                setStep((s) => s - 1);
                handleResetStepData();
              }}
              className="px-6 py-2 text-orange-600 border border-orange-600 rounded-full hover:bg-orange-50"
            >
              Previous
            </button>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!isFormValid()}
              className="ml-auto px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 disabled:bg-gray-400"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700"
            >
              Proceed to pay
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
