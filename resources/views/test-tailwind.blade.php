<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Test</title>
    @vite(['resources/css/app.css'])
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 class="text-3xl font-bold text-center text-blue-600 mb-4">Tailwind CSS is Working!</h1>
        <p class="text-gray-600 text-center mb-6">Your Laravel project is successfully configured with Tailwind CSS v4.</p>
        
        <div class="flex justify-center space-x-4">
            <div class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">Red Button</div>
            <div class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">Green Button</div>
        </div>
        
        <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p class="text-blue-800 text-sm">This is a blue info box styled with Tailwind CSS classes.</p>
        </div>
    </div>
</body>
</html>