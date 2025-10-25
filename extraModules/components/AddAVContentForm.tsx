

import React, { useState } from 'react';
import { AVContent } from '../types';

interface AddAVContentFormProps {
    onSubmit: (content: Omit<AVContent, 'id' | 'status' | 'uploadDate'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AddAVContentForm: React.FC<AddAVContentFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        type: 'Video' as 'Video' | 'Audio' | 'Image',
        uploadedBy: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value as any }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
                <input type="text" name="title" id="title" required onChange={handleChange} className={formInputStyle}/>
            </div>
            <div>
                <label htmlFor="uploadedBy" className="block text-sm font-medium text-gray-300">Uploaded By</label>
                <input type="text" name="uploadedBy" id="uploadedBy" required onChange={handleChange} className={formInputStyle}/>
            </div>
            <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-300">Content Type</label>
                <select name="type" id="type" required value={formData.type} onChange={handleChange} className={formInputStyle}>
                    <option value="Video">Video</option>
                    <option value="Audio">Audio</option>
                    <option value="Image">Image</option>
                </select>
            </div>
             <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description</label>
                <textarea name="description" id="description" rows={3} required value={formData.description} onChange={handleChange} className={formInputStyle}></textarea>
            </div>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Add Content
                </button>
            </div>
        </form>
    );
};

export default AddAVContentForm;