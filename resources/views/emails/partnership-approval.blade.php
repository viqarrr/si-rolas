<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Partnership Approved</title>
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
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #ffffff;
            padding: 40px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
        }
        .success-icon {
            font-size: 48px;
            margin-bottom: 10px;
        }
        .content {
            padding: 40px 30px;
        }
        .content h2 {
            color: #10b981;
            font-size: 22px;
            margin-top: 0;
        }
        .info-box {
            background: #f0fdf4;
            border-left: 4px solid #10b981;
            padding: 20px;
            margin: 25px 0;
            border-radius: 4px;
        }
        .info-box h3 {
            margin-top: 0;
            color: #065f46;
            font-size: 18px;
        }
        .info-box p {
            margin: 8px 0;
            font-size: 15px;
        }
        .info-box strong {
            color: #065f46;
        }
        .button {
            display: inline-block;
            padding: 14px 32px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
        .next-steps {
            background: #eff6ff;
            border-radius: 4px;
            padding: 20px;
            margin: 20px 0;
        }
        .next-steps h3 {
            color: #1e40af;
            margin-top: 0;
            font-size: 18px;
        }
        .next-steps ul {
            padding-left: 20px;
            margin: 10px 0;
        }
        .next-steps li {
            margin: 10px 0;
        }
        .partnership-details {
            border: 1px solid #e5e7eb;
            border-radius: 4px;
            padding: 15px;
            margin: 20px 0;
            background: #f9fafb;
        }
        .partnership-details table {
            width: 100%;
            border-collapse: collapse;
        }
        .partnership-details td {
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        .partnership-details td:first-child {
            font-weight: 600;
            color: #4b5563;
            width: 40%;
        }
        .partnership-details tr:last-child td {
            border-bottom: none;
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
            <div class="success-icon">✅</div>
            <h1>Partnership Approved!</h1>
        </div>
        
        <div class="content">
            <h2>Congratulations, {{ $company->name }}!</h2>
            
            <p>We're thrilled to inform you that your partnership proposal has been approved! Welcome to our network of industry partners.</p>
            
            <div class="info-box">
                <h3>Partnership Details</h3>
                <div class="partnership-details">
                    <table>
                        <tr>
                            <td>Partnership Type:</td>
                            <td>
                                @switch($partnership->partnership_type)
                                    @case('internship')
                                        Internship Program
                                        @break
                                    @case('job_placement')
                                        Job Placement
                                        @break
                                    @case('research')
                                        Research Collaboration
                                        @break
                                    @case('training')
                                        Training & Development
                                        @break
                                    @default
                                        Other
                                @endswitch
                            </td>
                        </tr>
                        @if($partnership->proposed_start_date)
                        <tr>
                            <td>Proposed Start Date:</td>
                            <td>{{ \Carbon\Carbon::parse($partnership->proposed_start_date)->format('F d, Y') }}</td>
                        </tr>
                        @endif
                        @if($partnership->proposed_end_date)
                        <tr>
                            <td>Proposed End Date:</td>
                            <td>{{ \Carbon\Carbon::parse($partnership->proposed_end_date)->format('F d, Y') }}</td>
                        </tr>
                        @endif
                        <tr>
                            <td>Contact Person:</td>
                            <td>{{ $partnership->contact_person }}</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            @if($partnership->admin_notes)
            <div class="info-box">
                <h3>Notes from Admin</h3>
                <p style="white-space: pre-line;">{{ $partnership->admin_notes }}</p>
            </div>
            @endif
            
            @if($dashboardUrl)
            <div style="text-align: center;">
                <a href="{{ $dashboardUrl }}" class="button">Access Your Dashboard</a>
            </div>
            @endif
            
            <div class="next-steps">
                <h3>Next Steps:</h3>
                <ul>
                    @if($dashboardUrl)
                    <li><strong>Access Your Dashboard:</strong> Click the button above to log in and manage your partnership</li>
                    <li><strong>Complete Your Profile:</strong> Update your company information and add your logo</li>
                    <li><strong>Post Job Opportunities:</strong> Start posting job openings and internship positions</li>
                    @else
                    <li><strong>Check Your Email:</strong> You should receive a separate email with your login credentials</li>
                    <li><strong>Set Up Your Account:</strong> Log in and complete your company profile</li>
                    <li><strong>Start Posting:</strong> Begin posting job opportunities for our students</li>
                    @endif
                    <li><strong>Connect with Us:</strong> Our team will reach out to discuss the partnership details</li>
                </ul>
            </div>
            
            <p>We're excited about this partnership and look forward to connecting our talented students with your organization. Together, we can create meaningful opportunities for the next generation of professionals.</p>
            
            <p>If you have any questions or need assistance, please don't hesitate to reach out to our team.</p>
            
            <p>Thank you for choosing to partner with us!</p>
            
            <p>Best regards,<br><strong>The Job Portal Team</strong></p>
        </div>
        
        <div class="footer">
            <p><strong>Questions or Need Help?</strong></p>
            <p>Contact us at: <a href="mailto:support@example.com">support@example.com</a></p>
            <p>&copy; {{ date('Y') }} Job Portal. All rights reserved.</p>
        </div>
    </div>
</body>
</html>