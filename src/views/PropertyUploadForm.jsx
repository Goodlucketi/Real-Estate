import React, { useState } from 'react';

const PropertyUploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    photos: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + formData.photos.length > 4) {
      alert('You can only upload up to 4 photos.');
      return;
    }

    setFormData({ ...formData, photos: [...formData.photos, ...files] });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('location', formData.location);
    formData.photos.forEach((photo, index) => {
      data.append(`photo${index + 1}`, photo);
    });

    // Submit form data (example with fetch)
   console.log(data);
   alert("Property Successfuly uploaded")
   
  };

  return (
    <main className='p-4 md:p-8'>
        <form onSubmit={handleFormSubmit} className="p-6 md:w-4/12 mx-auto shadow-lg rounded-md">
            <h2 className="text-2xl md:text-3xl text-center mb-2 text-black p-2 w-9/12 rounded-md mx-auto font-sans font-bold text-blue-700">Property Upload</h2>
            <div className="my-5">
                <input
                type="text"
                name="type"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder='Property Type (E.g Self Contained)'
                className="p-3 text-slate-900 rounded-md shadow-md border-none w-full"
                />
            </div>

            <div className="my-5">
                <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                placeholder='Description'
                className="p-3 text-slate-900 rounded-md shadow-md border-none w-full"
                />
            </div>

            <div className="my-5">
                <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                placeholder='Price'
                className="p-3 text-slate-900 rounded-md shadow-md border-none w-full"
                />
            </div>

            <div className="my-5">
                <label>Location:</label>
                <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                placeholder='Location'
                className="p-3 text-slate-900 rounded-md shadow-md border-none w-full"
                />
            </div>

            <div className="my-5">
                <label>Upload Photos (Max 4):</label>
                <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="p-3 text-slate-900 rounded-md shadow-md border-none w-full"
                />
                <p>{formData.photos.length} / 4 photos uploaded.</p>
            </div>

            <button type="submit" className="p-3 rounded-md border-none w-full bg-blue-700 text-white hover:bg-blue-500 transition-all duration-500">Upload Property</button>
        </form>
    </main>
  );
};

export default PropertyUploadForm;
