import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { 
  Globe, Users, TrendingUp, Award, Target, Zap, Heart, 
  Download, BarChart3, PieChart, Calendar, Clock,
  MapPin, Mail, Phone, ExternalLink
} from 'lucide-react'

const MediaKit = () => {
  const networkStats = [
    { label: 'Morning Shows', value: '45+', description: 'Across six continents' },
    { label: 'Countries', value: '28', description: 'Global presence' },
    { label: 'Languages', value: '15+', description: 'Multilingual content' },
    { label: 'Time Zones', value: '12', description: 'Around-the-clock coverage' },
    { label: 'Social Followers', value: '28.5M', description: 'Engaged community' },
    { label: 'Monthly Viewers', value: '150M', description: 'Global audience' },
    { label: 'Brand Recognition', value: '92%', description: 'In served markets' },
    { label: 'Advertiser Satisfaction', value: '96%', description: 'Partner retention rate' }
  ]

  const audienceData = [
    { demographic: 'Age 25-44', percentage: '42%', description: 'Primary demographic' },
    { demographic: 'Age 45-64', percentage: '35%', description: 'Secondary demographic' },
    { demographic: 'Age 18-34', percentage: '18%', description: 'Young professionals' },
    { demographic: 'Age 65+', percentage: '5%', description: 'Senior viewers' }
  ]

  const contentPillars = [
    {
      icon: Heart,
      title: 'Community Connection',
      description: 'Local stories, community events, and cultural celebrations that bring people together'
    },
    {
      icon: Zap,
      title: 'Breaking News',
      description: 'Real-time local and international news coverage with expert analysis'
    },
    {
      icon: Target,
      title: 'Lifestyle & Wellness',
      description: 'Health, fitness, cooking, and lifestyle content tailored to local preferences'
    },
    {
      icon: Globe,
      title: 'Cultural Heritage',
      description: 'Celebrating local traditions, arts, and cultural identity in each market'
    }
  ]

  const advertisingOpportunities = [
    {
      type: 'Traditional Spots',
      duration: '15s, 30s, 60s',
      placement: 'During show segments',
      reach: 'Broadcast audience',
      pricing: 'Premium rates'
    },
    {
      type: 'Sponsored Segments',
      duration: '2-5 minutes',
      placement: 'Integrated content',
      reach: 'Broadcast + Digital',
      pricing: 'Custom packages'
    },
    {
      type: 'Digital Integration',
      duration: 'Various',
      placement: 'Social media, website',
      reach: 'Digital audience',
      pricing: 'Performance-based'
    },
    {
      type: 'Event Partnerships',
      duration: 'Full events',
      placement: 'Live broadcasts',
      reach: 'Multi-platform',
      pricing: 'Sponsorship tiers'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="gm-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Media Kit 2025</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Comprehensive overview of The Good Morning Show network, a global daily livestreaming 
            business and entertainment show covering diverse topics from Real Estate to Technology, 
            audience insights, and partnership opportunities across our global brand family.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[var(--gm-blue)] hover:bg-gray-100 font-semibold px-8 py-3"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF Media Kit
          </Button>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="gm-section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Summary</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The Good Morning Show represents the world's most comprehensive localized morning talk show network, 
              connecting diverse communities through authentic, culturally-relevant daily livestreaming business 
              and entertainment programming that celebrates local identity while maintaining global quality standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To be the trusted morning companion in every community we serve, delivering business and 
                entertainment content through daily livestreaming that informs, inspires, and connects people 
                to their local culture and global community while covering essential topics like Real Estate & Construction, 
                Banking & Finance, Technology, Healthcare, and Sustainability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--gm-blue)] rounded-full"></div>
                  <span className="text-gray-700">45+ localized morning shows across 6 continents</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--gm-orange)] rounded-full"></div>
                  <span className="text-gray-700">150M+ monthly viewers globally</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--gm-dark)] rounded-full"></div>
                  <span className="text-gray-700">28.5M+ engaged social media followers</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Key Differentiators</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-[var(--gm-blue)] mt-0.5 flex-shrink-0" />
                  <span>Authentic local content created by community insiders</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-5 h-5 text-[var(--gm-orange)] mt-0.5 flex-shrink-0" />
                  <span>Global network with local expertise and cultural sensitivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 text-[var(--gm-dark)] mt-0.5 flex-shrink-0" />
                  <span>Consistent growth across all markets and demographics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Network Statistics */}
      <section className="gm-section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Network Statistics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our impressive reach and engagement metrics demonstrate the power of authentic, 
              community-focused daily livestreaming business and entertainment programming.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkStats.map((stat, index) => (
              <Card key={index} className="gm-stats-card text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-[var(--gm-blue)] mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Demographics */}
      <section className="gm-section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Audience Demographics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse, engaged audience spans multiple demographics with strong purchasing power 
              and brand loyalty across all served markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Age Distribution</h3>
              <div className="space-y-6">
                {audienceData.map((demo, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">{demo.demographic}</div>
                      <div className="text-sm text-gray-600">{demo.description}</div>
                    </div>
                    <div className="text-2xl font-bold text-[var(--gm-blue)]">{demo.percentage}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Audience Insights</h3>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-[var(--gm-blue)]" />
                    <h4 className="font-semibold text-gray-900">Household Income</h4>
                  </div>
                  <p className="text-gray-600 mb-2">68% earn above median household income</p>
                  <p className="text-sm text-gray-500">Strong purchasing power across all markets</p>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-[var(--gm-orange)]" />
                    <h4 className="font-semibold text-gray-900">Viewing Habits</h4>
                  </div>
                  <p className="text-gray-600 mb-2">Average 45 minutes daily engagement</p>
                  <p className="text-sm text-gray-500">Peak viewing: 6:00-9:00 AM local time</p>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="w-6 h-6 text-[var(--gm-dark)]" />
                    <h4 className="font-semibold text-gray-900">Brand Loyalty</h4>
                  </div>
                  <p className="text-gray-600 mb-2">87% watch 4+ days per week</p>
                  <p className="text-sm text-gray-500">High retention and recommendation rates</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Strategy */}
      <section className="gm-section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Content Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programming pillars ensure consistent quality while celebrating the unique 
              character and culture of each community we serve through daily livestreaming business and entertainment content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="gm-brand-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--gm-blue)]/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[var(--gm-blue)]" />
                  </div>
                  <CardTitle className="text-xl">Business & Finance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Real Estate & Construction, Banking & Finance, Transportation & Logistics, and E-commerce discussions tailored to local markets</p>
              </CardContent>
            </Card>
            
            <Card className="gm-brand-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--gm-blue)]/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[var(--gm-blue)]" />
                  </div>
                  <CardTitle className="text-xl">Health & Wellness</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Healthcare & Pharma insights, Health & Wellness tips, and lifestyle content promoting community well-being</p>
              </CardContent>
            </Card>
            
            <Card className="gm-brand-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--gm-blue)]/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-[var(--gm-blue)]" />
                  </div>
                  <CardTitle className="text-xl">Technology & Innovation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Technology trends, digital transformation, and Sustainability & Social Responsibility initiatives shaping the future</p>
              </CardContent>
            </Card>
            
            <Card className="gm-brand-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--gm-blue)]/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-[var(--gm-blue)]" />
                  </div>
                  <CardTitle className="text-xl">Culture & Society</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Education, Travel & Hospitality, Politics & Economics, Retail & Consumer Goods, celebrating local traditions and global connections</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advertising Opportunities */}
      <section className="gm-section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advertising Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible partnership options designed to maximize brand exposure and engagement 
              across our global network of daily livestreaming morning talk shows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advertisingOpportunities.map((opportunity, index) => (
              <Card key={index} className="gm-brand-card">
                <CardHeader>
                  <CardTitle className="text-xl text-[var(--gm-blue)]">{opportunity.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{opportunity.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Placement:</span>
                      <span className="font-medium">{opportunity.placement}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Reach:</span>
                      <span className="font-medium">{opportunity.reach}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pricing:</span>
                      <Badge variant="outline" className="border-[var(--gm-orange)] text-[var(--gm-orange)]">
                        {opportunity.pricing}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="gm-section-padding bg-[var(--gm-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partnership Contacts</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to partner with the world's premier morning talk show network? 
              Our team is here to create custom solutions for your brand on our daily livestreaming platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-[var(--gm-orange)]" />
                  <CardTitle>Global Headquarters</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Good Morning Media Network<br />
                  1407 Broadway<br />
                  New York, NY 10018<br />
                  United States
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-[var(--gm-orange)]" />
                  <CardTitle>Key Contacts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-white/90">
                  <div>
                    <div className="font-semibold">Joey Laham</div>
                    <div className="text-sm">Founder & CEO</div>
                    <div className="text-sm">joey.laham@tgmshow.com</div>
                  </div>
                  <div>
                    <div className="font-semibold">Partnerships Team</div>
                    <div className="text-sm">partnerships@tgmshow.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-[var(--gm-orange)]" />
                  <CardTitle>Get in Touch</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-white/90">
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div>+1-212-555-0100</div>
                  </div>
                  <div>
                    <div className="font-semibold">Website</div>
                    <div>www.tgmshow.com</div>
                  </div>
                  <div>
                    <div className="font-semibold">Press Inquiries</div>
                    <div>press@tgmshow.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-[var(--gm-orange)] hover:bg-[var(--gm-orange)]/90 text-white px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Complete Media Kit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MediaKit

