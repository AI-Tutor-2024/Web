const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createFolder = async (subject: string, professor: string) => {
  const response = await fetch(`${API_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ subject, professor }),
  });

  if (!response.ok) {
    throw new Error('폴더 생성 실패');
  }

  return response.json();
};

export const deleteFolder = async (folderId: number) => {
  const response = await fetch(`${API_BASE_URL}/${folderId}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Failed to delete folder');
  }
  return response.json();
};

export const updateFolder = async (folderId: number, subject: string, professor: string) => {
  const response = await fetch(`${API_BASE_URL}/${folderId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subject, professor }),
  });
  if (!response.ok) {
    throw new Error('Failed to update folder');
  }
  return response.json();
};