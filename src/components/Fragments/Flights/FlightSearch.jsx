import { useState } from 'react';
import { useFlightDetails } from '../../../hooks/useFetchFlightDetails';

export const FlightSearch = () => {
    const [searchParams, setSearchParams] = useState({
      flightId: '',
      seatClass: 'ECONOMY',
      adult: 1,
      child: 0,
      baby: 0
    });
  
    const {
      flightDetails,
      loading,
      error,
      refetch
    } = useFlightDetails({
      ...searchParams,
      autoFetch: false // Don't fetch until search button is clicked
    });
  
    const handleSearch = (e) => {
      e.preventDefault();
      refetch();
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSearchParams(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Search Flight Details
        </h1>
        <form onSubmit={handleSearch} className="space-y-6">
          {/* Flight ID Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Flight ID:
            </label>
            <input
              type="text"
              name="flightId"
              value={searchParams.flightId}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Flight ID"
            />
          </div>
      
          {/* Class Selection */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Seat Class:
            </label>
            <select
              name="seatClass"
              value={searchParams.seatClass}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="ECONOMY">Economy</option>
              <option value="BUSINESS">Business</option>
              <option value="FIRST">First Class</option>
            </select>
          </div>
      
          {/* Passenger Counts */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Adults:
              </label>
              <input
                type="number"
                name="adult"
                min="0"
                value={searchParams.adult}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Children:
              </label>
              <input
                type="number"
                name="child"
                min="0"
                value={searchParams.child}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Infants:
              </label>
              <input
                type="number"
                name="baby"
                min="0"
                value={searchParams.baby}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
      
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ${
                loading && "opacity-50 cursor-not-allowed"
              }`}
              disabled={loading}
            >
              {loading ? "Searching..." : "Search Flight"}
            </button>
          </div>
        </form>
      
        {/* Error Message */}
        {error && (
          <div className="mt-4 text-center text-red-500 font-semibold">
            {error}
          </div>
        )}
      
        {/* Flight Details */}
        {flightDetails && (
          <div className="mt-8 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {flightDetails.airline.name} - {flightDetails.airline.flightNumber}
            </h3>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <p>
                <span className="font-semibold">Departure City:</span>{" "}
                {flightDetails.departureCity}
              </p>
              <p>
                <span className="font-semibold">Arrival City:</span>{" "}
                {flightDetails.arrivalCity}
              </p>
              <p>
                <span className="font-semibold">Seat Class:</span>{" "}
                {searchParams.seatClass}
              </p>
              <p>
                <span className="font-semibold">Price:</span>{" "}
                {flightDetails.priceFormatted}
              </p>
            </div>
          </div>
        )}
      </div>
      
    );
  };