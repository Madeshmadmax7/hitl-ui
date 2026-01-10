const API_BASE_URL = "http://localhost:8080/api";

export const api = {
    // Internships
    getAllInternships: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/internships`);
            if (!response.ok) throw new Error("Failed to fetch internships");
            return await response.json();
        } catch (error) {
            console.error("Error fetching internships:", error);
            throw error;
        }
    },

    searchInternships: async (params) => {
        try {
            const query = new URLSearchParams(params).toString();
            const response = await fetch(`${API_BASE_URL}/internships/search?${query}`);
            if (!response.ok) throw new Error("Failed to search internships");
            return await response.json();
        } catch (error) {
            console.error("Error searching internships:", error);
            throw error;
        }
    },

    addInternship: async (internship) => {
        try {
            const response = await fetch(`${API_BASE_URL}/internships`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(internship),
            });
            if (!response.ok) throw new Error("Failed to add internship");
            return await response.json();
        } catch (error) {
            console.error("Error adding internship:", error);
            throw error;
        }
    },

    // Students
    registerStudent: async (student) => {
        try {
            const response = await fetch(`${API_BASE_URL}/students`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student),
            });
            if (!response.ok) throw new Error("Failed to register student");
            return await response.json();
        } catch (error) {
            console.error("Error registering student:", error);
            throw error;
        }
    },

    getAllStudents: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/students`);
            if (!response.ok) throw new Error("Failed to fetch students");
            return await response.json();
        } catch (error) {
            console.error("Error fetching students:", error);
            throw error;
        }
    }
};
