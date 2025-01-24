import React from 'react';

const accommodationTypes = [
  { value: '2days', label: '2 Day 1 Night', originalPrice: 'Rs. 15,999', discountedPrice: 'Rs. 9,999' },
  { value: '3days', label: '3 Day 2 Night', originalPrice: 'Rs. 27,500', discountedPrice: 'Rs. 17,999' },
];

const accommodationTypes2 = [
  { value: '2days_special', label: '2 Day 1 Night', originalPrice: 'Rs. 19,999', discountedPrice: 'Rs. 13,999' },
  { value: '3days_special', label: '3 Day 2 Night', originalPrice: 'Rs. 31,500', discountedPrice: 'Rs. 22,999' },
];

function AccommodationDetails({ formData, onChange, setSelectedPackage }) {
  return (
    <div className="space-y-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Accommodation Type
      </label>

      {/* Regular Dates Accommodation */}
      <div className="space-y-3">
        {accommodationTypes.map((type) => (
          <label
            key={type.value}
            className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
              formData.accommodationType === type.value
                ? 'border-orange-600 bg-orange-50'
                : 'border-gray-200 hover:border-orange-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="accommodationType" // Same name across both groups
                  value={type.value}
                  checked={formData.accommodationType === type.value}
                  onChange={(e) => {
                    onChange('accommodationType', e.target.value);
                    setSelectedPackage({
                      title: type.label,
                      price: parseInt(type.discountedPrice.replace(/[^0-9]+/g, '')),
                    });
                  }}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500"
                />
                <span className="ml-3">{type.label}</span>
              </div>
              <div>
                <span className="text-gray-500 line-through">{type.originalPrice}</span>
                <span className="text-orange-600 font-semibold ml-2">{type.discountedPrice}</span>
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Special Dates Accommodation */}
      <div className="space-y-3">
        <h1 className="text-lg font-medium text-gray-800">
          Accommodation for Special Dates (13, 14, 29, 3, 12, 26)
        </h1>
        {accommodationTypes2.map((type) => (
          <label
            key={type.value}
            className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
              formData.accommodationType === type.value
                ? 'border-orange-600 bg-orange-50'
                : 'border-gray-200 hover:border-orange-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="accommodationType" // Same name across both groups
                  value={type.value}
                  checked={formData.accommodationType === type.value}
                  onChange={(e) => {
                    onChange('accommodationType', e.target.value);
                    setSelectedPackage({
                      title: type.label,
                      price: parseInt(type.discountedPrice.replace(/[^0-9]+/g, '')),
                    });
                  }}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500"
                />
                <span className="ml-3">{type.label}</span>
              </div>
              <div>
                <span className="text-gray-500 line-through">{type.originalPrice}</span>
                <span className="text-orange-600 font-semibold ml-2">{type.discountedPrice}</span>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default AccommodationDetails;
