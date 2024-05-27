async function submitFeedback() {
    const feedback = document.getElementById('feedback').value;

    if (!feedback) {
        console.error('Feedback is required');
        return;
    }

    try {
        const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer YOUR_API_KEY`
            },
            body: JSON.stringify({
                prompt: feedback,
                max_tokens: 50
            })
        });

        const data = await response.json();
        console.log('ChatGPT Response:', data.choices[0].text);
    } catch (error) {
        console.error('Error:', error);
    }
}