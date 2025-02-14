
export async function performRestRequest() {
  try {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching cat fact:', error)
    throw error
  }
} 

