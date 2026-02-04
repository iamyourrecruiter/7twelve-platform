// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Helper function for making API calls
const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'API request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Candidate APIs
export const candidateAPI = {
  submit: async (formData) => {
    const data = new FormData();
    
    Object.keys(formData).forEach(key => {
      if (key === 'resume' && formData[key]) {
        data.append('resume', formData[key]);
      } else if (key === 'skills') {
        data.append('skills', JSON.stringify(formData[key]));
      } else if (formData[key] !== null && formData[key] !== undefined) {
        data.append(key, formData[key]);
      }
    });

    return apiCall('/candidates', {
      method: 'POST',
      body: data
    });
  },

  getById: async (id) => {
    return apiCall(`/candidates/${id}`);
  }
};

// Company APIs
export const companyAPI = {
  submit: async (formData) => {
    return apiCall('/companies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
  },

  getById: async (id) => {
    return apiCall(`/companies/${id}`);
  }
};

// Blog APIs
export const blogAPI = {
  getAll: async () => {
    return apiCall('/blogs');
  },

  getFeatured: async () => {
    return apiCall('/blogs/featured');
  },

  getById: async (id) => {
    return apiCall(`/blogs/${id}`);
  },

  submit: async (formData) => {
    const data = new FormData();
    
    Object.keys(formData).forEach(key => {
      if (key === 'coverImage' && formData[key]) {
        data.append('cover_image', formData[key]);
      } else if (formData[key] !== null && formData[key] !== undefined) {
        data.append(key, formData[key]);
      }
    });

    return apiCall('/blogs/submit', {
      method: 'POST',
      body: data
    });
  }
};

// Contact APIs
export const contactAPI = {
  submit: async (formData) => {
    return apiCall('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
  }
};

// Admin APIs
export const adminAPI = {
  login: async (password) => {
    return apiCall('/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password })
    });
  },

  candidates: {
    getAll: async (token) => {
      return apiCall('/admin/candidates', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    },

    updateStatus: async (token, id, status) => {
      return apiCall(`/admin/candidates/${id}/status`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status })
      });
    }
  },

  companies: {
    getAll: async (token) => {
      return apiCall('/admin/companies', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    },

    approve: async (token, id) => {
      return apiCall(`/admin/companies/${id}/approve`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    }
  },

  advertisements: {
    getAll: async (token) => {
      return apiCall('/admin/advertisements', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    },

    create: async (token, formData) => {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== undefined) {
          data.append(key, formData[key]);
        }
      });

      return apiCall('/admin/advertisements', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: data
      });
    }
  },

  blogs: {
    getAll: async (token) => {
      return apiCall('/admin/blogs', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    },

    publish: async (token, id) => {
      return apiCall(`/admin/blogs/${id}/publish`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    }
  }
};

// (exports consolidated at end)

// Market APIs (backend endpoints at /api/market)
export const marketAPI = {
  getNews: async (queryString = '') => {
    return apiCall(`/market/news${queryString}`);
  },
  getRss: async (queryString = '') => {
    return apiCall(`/market/rss${queryString}`);
  },
  getSummary: async (queryString = '') => {
    return apiCall(`/market/summary${queryString}`);
  }
  generate: async (queryString = '') => {
    return apiCall(`/market/generate${queryString}`);
  }
};

export default {
  candidateAPI,
  companyAPI,
  blogAPI,
  contactAPI,
  adminAPI,
  marketAPI
};