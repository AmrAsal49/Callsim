const COMPLAINTS_DATA = [
    {
        customerName: "John Doe",
        initialCustomerComplaint: "My business internet keeps dropping every hour! We've lost thousands in sales because our payment system is down. This is completely unacceptable for a business account!",
        customerGender: "male",
        customerTemperature: 0.7,
        customerTopK: 40,
        customerTopP: 0.8,
        customerMaxOutputTokens: 100,
        id: "int_001",
        type: "Service Interruption",
        scenario: "Internet service has been intermittent for the past 24 hours, affecting business operations",
        difficulty: "high",
        businessImpact: "High - Payment system affected",
        expectedResponses: [
            "Acknowledge urgency for business customer",
            "Express understanding of revenue impact",
            "Immediate troubleshooting steps",
            "Offer business-specific solution/compensation"
        ]
    },
    {
        customerName: "Jane Smith",
        initialCustomerComplaint: "We're only getting 50Mbps when we're paying for 300Mbps. Our video conferences with clients keep freezing!",
        customerGender: "female",
        customerTemperature: 0.8,
        customerTopK: 40,
        customerTopP: 0.9,
        customerMaxOutputTokens: 150,
        id: "int_002",
        type: "Speed Issues",
        scenario: "Business customer reporting significantly slower speeds than promised in their plan",
        difficulty: "medium",
        businessImpact: "Medium - Client communications affected",
        expectedResponses: [
            "Verify plan details",
            "Run speed test",
            "Check peak usage times",
            "Discuss business-grade solutions"
        ]
    },
    {
        customerName: "Alex Brown",
        initialCustomerComplaint: "There's a $200 charge for equipment we never received! This is the third billing issue in two months!",
        customerGender: "male",
        customerTemperature: 0.7,
        customerTopK: 40,
        customerTopP: 0.8,
        customerMaxOutputTokens: 100,
        id: "bill_001",
        type: "Unexpected Charges",
        scenario: "Business owner finds unexpected equipment charges on their bill",
        difficulty: "high",
        businessImpact: "Medium - Financial impact",
        expectedResponses: [
            "Immediate bill review",
            "Clear explanation of charges",
            "Quick resolution timeline",
            "Preventive measures for future"
        ]
    },
    {
        customerName: "Sarah Johnson",
        initialCustomerComplaint: "Nobody told me the contract would auto-renew for two years! We're opening a new location and need to revise our services.",
        customerGender: "female",
        customerTemperature: 0.8,
        customerTopK: 40,
        customerTopP: 0.9,
        customerMaxOutputTokens: 150,
        id: "bill_002",
        type: "Contract Dispute",
        scenario: "Customer disputes automatic renewal terms of business contract",
        difficulty: "high",
        businessImpact: "High - Business expansion affected",
        expectedResponses: [
            "Review contract terms",
            "Explain renewal process",
            "Discuss business growth options",
            "Offer contract flexibility"
        ]
    },
    {
        customerName: "Mike Wilson",
        initialCustomerComplaint: "I've been trying to get help for two days! We're a business customer paying premium rates for supposedly priority support!",
        customerGender: "male",
        customerTemperature: 0.7,
        customerTopK: 40,
        customerTopP: 0.8,
        customerMaxOutputTokens: 100,
        id: "supp_001",
        type: "Response Time",
        scenario: "Business customer waited 48 hours for critical support response",
        difficulty: "high",
        businessImpact: "High - Business operations affected",
        expectedResponses: [
            "Immediate acknowledgment of delay",
            "Explain priority support process",
            "Immediate escalation",
            "Preventive measures discussion"
        ]
    },
    {
        customerName: "Emily Davis",
        initialCustomerComplaint: "Our grand opening is in 3 days and the internet still isn't installed! We can't delay opening our business!",
        customerGender: "female",
        customerTemperature: 0.8,
        customerTopK: 40,
        customerTopP: 0.9,
        customerMaxOutputTokens: 150,
        id: "supp_002",
        type: "Installation Delay",
        scenario: "New business setup delayed due to installation scheduling",
        difficulty: "high",
        businessImpact: "Critical - Business opening affected",
        expectedResponses: [
            "Acknowledge critical timeline",
            "Immediate escalation to field ops",
            "Provide temporary solution",
            "Compensation discussion"
        ]
    },
    {
        customerName: "Chris Lee",
        initialCustomerComplaint: "Our router keeps rebooting during lunch rush! We can't process any card payments and customers are leaving!",
        customerGender: "male",
        customerTemperature: 0.7,
        customerTopK: 40,
        customerTopP: 0.8,
        customerMaxOutputTokens: 100,
        id: "equip_001",
        type: "Hardware Malfunction",
        scenario: "Business router repeatedly rebooting during peak hours",
        difficulty: "medium",
        businessImpact: "High - Revenue directly affected",
        expectedResponses: [
            "Immediate technical assessment",
            "Temporary workaround",
            "Equipment replacement options",
            "Business interruption compensation"
        ]
    }
];
