# Loyalty Card Offers Data Structure
# December 2025 - Real Data to be populated

## Company Data Structure
Each company should have:
- Company Name
- Category (lifestyle, business, services)
- Featured Status (featured, new, popular, or regular)
- Offers Array (each with title, description, value, terms, read time)

## Companies to Include:
1. Quality Printing Press (services)
2. Fine Hygienic Holding (services) 
3. Delta Insurance (business)
4. SleepZone (lifestyle)
5. Masader (business)
6. WashyWash (services)
7. Nuqul Automotive - NA (lifestyle)
8. Magma (business)

## Sample Data Structure:
```json
{
  "companies": [
    {
      "name": "Quality Printing Press",
      "category": "services",
      "featured": false,
      "new": false,
      "offers": [
        {
          "title": "40% Off Premium Prints",
          "description": "Exceptional quality printing with premium papers, finishes, and special effects.",
          "value": "Save up to $400",
          "readTime": "1 min read",
          "terms": "Premium paper and finish options. Full-color printing. Design consultation included.",
          "badge": "PREMIUM"
        }
      ]
    },
    {
      "name": "Fine Hygienic Holding", 
      "category": "services",
      "featured": false,
      "new": true,
      "offers": [
        {
          "title": "30% Off Bulk Orders",
          "description": "Save big on bulk orders of our premium hygiene products including sanitizers, wipes, and wellness items.",
          "value": "Save $50+ per order",
          "readTime": "1 min read", 
          "terms": "Minimum order $200. Valid for business and personal bulk orders.",
          "badge": "BULK"
        }
      ]
    }
    // ... continue for all companies
  ]
}
```

## This Month's Picks (Featured 3):
Based on typical employee preferences, these should be the most valuable/appealing:
1. Nuqul Automotive - vehicle discounts
2. SleepZone - home comfort products  
3. WashyWash - convenience services

## Monthly Spotlight:
Rotating company feature - suggest starting with Delta Insurance for comprehensive coverage appeal.

## Action Items:
1. Please provide the actual offer data for each company
2. Confirm which companies should be featured in "This Month's Picks"
3. Specify the monthly spotlight company
4. Update any company names if different from my assumptions