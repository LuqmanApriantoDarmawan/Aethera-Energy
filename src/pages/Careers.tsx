import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, Heart, Zap, Users, GraduationCap } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Jakarta",
      type: "Full-time",
      description: "Mengembangkan algoritma machine learning untuk optimasi energi.",
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "Jakarta / Remote",
      type: "Full-time",
      description: "Membangun API dan sistem backend untuk platform AETHERA.",
    },
    {
      title: "Sustainability Analyst",
      department: "Research",
      location: "Jakarta",
      type: "Full-time",
      description: "Menganalisis dampak lingkungan dan mengembangkan strategi keberlanjutan.",
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Jakarta",
      type: "Full-time",
      description: "Mengembangkan kemitraan strategis dan memperluas pasar.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Jakarta / Remote",
      type: "Full-time",
      description: "Merancang antarmuka yang intuitif untuk dashboard energi.",
    },
    {
      title: "Data Scientist",
      department: "Engineering",
      location: "Jakarta",
      type: "Full-time",
      description: "Menganalisis data energi dan mengembangkan model prediktif.",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Asuransi kesehatan premium untuk karyawan dan keluarga",
    },
    {
      icon: Zap,
      title: "Flexible Working",
      description: "Work from anywhere dengan flexible hours",
    },
    {
      icon: Users,
      title: "Team Activities",
      description: "Regular team building dan company retreats",
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "Dana pengembangan profesional dan sertifikasi",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-accent/20 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Karir di AETHERA Energy</h1>
            <p className="text-xl text-muted-foreground">
              Bergabunglah dengan kami untuk membentuk masa depan energi berkelanjutan
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Mengapa Bergabung dengan Kami?</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Di AETHERA Energy, kamu akan bekerja dengan teknologi terdepan dan tim yang passionate 
            untuk menciptakan dampak positif bagi lingkungan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Posisi Terbuka</h2>
          <div className="max-w-5xl mx-auto space-y-4">
            {positions.map((position, index) => (
              <Card key={index} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-grow">
                      <CardTitle className="text-xl mb-3">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">
                          <Briefcase className="h-3 w-3 mr-1" />
                          {position.department}
                        </Badge>
                        <Badge variant="outline">
                          <MapPin className="h-3 w-3 mr-1" />
                          {position.location}
                        </Badge>
                        <Badge variant="outline">
                          <Clock className="h-3 w-3 mr-1" />
                          {position.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{position.description}</p>
                    </div>
                    <Button className="md:self-start">Apply Now</Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Program Internship & Fresh Graduate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Kami membuka kesempatan bagi mahasiswa dan fresh graduate untuk bergabung dalam 
                  program internship kami. Dapatkan pengalaman langsung dalam mengembangkan teknologi 
                  energi berkelanjutan dengan bimbingan dari para ahli di bidangnya.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Durasi 6 bulan dengan kemungkinan full-time placement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Mentorship dari senior engineers dan researchers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Proyek nyata yang memberikan dampak</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Kompensasi kompetitif</span>
                  </div>
                </div>
                <Button>Apply for Internship</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Proses Rekrutmen</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Application</h3>
              <p className="text-sm text-muted-foreground">Submit CV dan portfolio</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Screening</h3>
              <p className="text-sm text-muted-foreground">HR review & phone interview</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Technical Test</h3>
              <p className="text-sm text-muted-foreground">Assessment & interview</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Offer</h3>
              <p className="text-sm text-muted-foreground">Final interview & offering</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
