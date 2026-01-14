# 📋 Real Data Collection for Portal Update

Since the Numbers file format is complex to parse directly, please provide your actual offer data using this simple format:

## For Each Company, Please Provide:

### 1. **Company Basic Info:**
- Company Name (exact as it should appear)
- Category: `lifestyle`, `ConsumerProduct`, or `services`
- Is this a NEW offer? (true/false)

### 2. **Offers (1-3 per company):**
For each offer, please provide:
- **Title**: "40% Off Premium Service"
- **Description**: Brief compelling description (1-2 sentences)
- **Value**: "Save $500" or "50% off monthly plan"  
- **Read Time**: "1 min read", "30 sec read", etc.
- **Terms**: Key terms and conditions (brief)
- **Badge**: "NEW", "FEATURED", "PREMIUM", "POPULAR", etc.

## Example for Quality Printing Press:
```json
{
  "name": "Quality Printing Press",
  "category": "services", 
  "new": false,
  "offers": [
    {
      "title": "40% Off Premium Prints",
      "description": "High-quality printing with premium papers and special finishes for all your business needs.",
      "value": "Save up to $400",
      "readTime": "1 min read",
      "terms": "Premium papers only. Design consultation included. 5-7 day turnaround.",
      "badge": "PREMIUM"
    }
  ]
}
```

## This Month's Picks (Top 3 Featured):
Which 3 offers should be highlighted at the top? (Typically the most valuable/appealing)

## Monthly Spotlight:
Which company should be featured in the spotlight section this month?

## Priority Companies to Focus On:
1. Quality Printing Press
2. Fine Hygienic Holding  
3. Delta Insurance
4. SleepZone
5. Masader
6. WashyWash
7. Nuqul Automotive
8. Magma

**Next Step:** Please provide the data for at least your top 3 companies, and I'll update the portal immediately with your real offers!