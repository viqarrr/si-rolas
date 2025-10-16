<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Our Job Portal</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            padding: 40px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
        }
        .content {
            padding: 40px 30px;
        }
        .content h2 {
            color: #667eea;
            font-size: 22px;
            margin-top: 0;
        }
        .credentials-box {
            background: #f8f9fa;
            border-left: 4px solid #667eea;
            padding: 20px;
            margin: 25px 0;
            border-radius: 4px;
        }
        .credentials-box p {
            margin: 10px 0;
            font-size: 15px;
        }
        .credentials-box strong {
            color: #667eea;
            font-weight: 600;
        }
        .credentials-box .password {
            font-family: 'Courier New', monospace;
            background: #ffffff;
            padding: 8px 12px;
            border-radius: 4px;
            display: inline-block;
            margin-top: 5px;
            font-size: 16px;
            color: #333;
            border: 1px solid #dee2e6;
        }
        .button {
            display: inline-block;
            padding: 14px 32px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 20px 0;
            transition: transform 0.2s;
        }
        .button:hover {
            transform: translateY(-2px);
        }
        .warning {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
            font-size: 14px;
        }
        .warning strong {
            color: #856404;
        }
        .instructions {
            background: #e7f3ff;
            border-radius: 4px;
            padding: 20px;
            margin: 20px 0;
        }
        .instructions h3 {
            color: #0066cc;
            margin-top: 0;
            font-size: 18px;
        }
        .instructions ol {
            padding-left: 20px;
            margin: 10px 0;
        }
        .instructions li {
            margin: 8px 0;
        }
        .footer {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            color: #6c757d;
            font-size: 14px;
            border-top: 1px solid #dee2e6;
        }
        .footer p {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Welcome to Our Job Portal!</h1>
        </div>
        
        <div class="content">
            <h2>Hello, {{ $user->name }}!</h2>
            
            <p>Congratulations! Your company has been approved to join our job portal platform. We're excited to have you as a partner.</p>
            
            <p>Your account has been created successfully. Below are your login credentials:</p>
            
            <div class="credentials-box">
                <p><strong>Email:</strong><br>{{ $user->email }}</p>
                <p><strong>Temporary Password:</strong><br><span class="password">{{ $password }}</span></p>
            </div>
            
            <div class="warning">
                <strong>⚠️ Important Security Notice:</strong><br>
                For your security, please change this password immediately after your first login. This is a temporary password that should not be shared with anyone.
            </div>
            
            <div style="text-align: center;">
                <a href="{{ $loginUrl }}" class="button">Login to Your Dashboard</a>
            </div>
            
            <div class="instructions">
                <h3>Getting Started:</h3>
                <ol>
                    <li>Click the "Login to Your Dashboard" button above</li>
                    <li>Enter your email and temporary password</li>
                    <li>Update your password in your profile settings</li>
                    <li>Complete your company profile</li>
                    <li>Start posting job opportunities!</li>
                </ol>
            </div>
            
            <p>From your dashboard, you can:</p>
            <ul>
                <li>✅ Post new job openings and internship opportunities</li>
                <li>✅ Manage your existing job postings</li>
                <li>✅ Update your company profile and information</li>
                <li>✅ View partnership details</li>
                <li>✅ Track application statistics</li>
            </ul>
            
            <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
            
            <p>We look forward to a successful partnership!</p>
            
            <p>Best regards,<br><strong>The Job Portal Team</strong></p>
        </div>
        
        <div class="footer">
            <p><strong>Need Help?</strong></p>
            <p>Contact us at: <a href="mailto:support@example.com">support@example.com</a></p>
            <p>&copy; {{ date('Y') }} Job Portal. All rights reserved.</p>
        </div>
    </div>
</body>
</html>