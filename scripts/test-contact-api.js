#!/usr/bin/env node

// Test script for the contact form API
// Run this to test if the contact form API is working

const testData = {
  name: "Test User",
  email: "test@example.com",
  company: "Test Company",
  phone: "123-456-7890",
  problem: "This is a test submission to verify the contact form is working correctly.",
  message: "Testing the contact form API endpoint.",
  honeypot: "" // Empty honeypot field
};

async function testContactAPI() {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000';
  
  const apiUrl = `${baseUrl}/api/contact`;
  
  console.log('🧪 Testing Contact Form API...');
  console.log(`📍 URL: ${apiUrl}`);
  console.log('📝 Test data:', JSON.stringify(testData, null, 2));
  console.log('');
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    
    const result = await response.json();
    
    console.log('📊 Response Status:', response.status);
    console.log('📄 Response Body:', JSON.stringify(result, null, 2));
    
    if (response.ok) {
      console.log('✅ Contact form API is working correctly!');
      console.log('📧 Check your email inbox for the test submission.');
    } else {
      console.log('❌ Contact form API returned an error:');
      console.log('   Status:', response.status);
      console.log('   Error:', result.error || 'Unknown error');
    }
    
  } catch (error) {
    console.log('❌ Failed to test contact form API:');
    console.log('   Error:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Make sure your development server is running:');
      console.log('   npm run dev');
    }
  }
}

// Run the test
testContactAPI();
