import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

const Team = () => {
  const leadership = [
    {
      name: "Dr. Ahmad Wijaya",
      role: "Chief Executive Officer",
      bio: "15+ tahun pengalaman di industri energi dengan fokus pada inovasi teknologi berkelanjutan.",
      initials: "AW",
    },
    {
      name: "Sarah Kusuma",
      role: "Chief Technology Officer",
      bio: "Ahli AI dan machine learning dengan publikasi internasional di bidang optimasi energi.",
      initials: "SK",
    },
    {
      name: "Michael Tan",
      role: "Chief Operations Officer",
      bio: "Pengalaman 20+ tahun dalam manajemen operasional perusahaan energi skala besar.",
      initials: "MT",
    },
  ];

  const teams = [
    {
      department: "Engineering & Technology",
      description: "Tim ahli yang mengembangkan platform AI dan solusi teknologi inovatif.",
      size: "25+ engineers",
    },
    {
      department: "Sustainability & Research",
      description: "Fokus pada riset dan pengembangan solusi energi berkelanjutan.",
      size: "12+ researchers",
    },
    {
      department: "Business Development",
      description: "Membangun kemitraan strategis dan mengembangkan pasar.",
      size: "15+ professionals",
    },
    {
      department: "Customer Success",
      description: "Memastikan kepuasan klien dengan dukungan 24/7.",
      size: "18+ specialists",
    },
  ];

  const values = [
    { title: "Innovation First", description: "Kami mendorong kreativitas dan eksperimen untuk solusi terbaik" },
    { title: "Collaboration", description: "Kerja tim yang solid adalah kunci kesuksesan kami" },
    { title: "Continuous Learning", description: "Investasi dalam pengembangan profesional setiap anggota tim" },
    { title: "Diversity & Inclusion", description: "Menghargai keberagaman perspektif dan latar belakang" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-accent/20 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tim Kami</h1>
            <p className="text-xl text-muted-foreground">
              Bertemu dengan para ahli yang mendorong inovasi energi berkelanjutan di AETHERA Energy
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Tim Kepemimpinan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                      {leader.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-3">{leader.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{leader.bio}</p>
                  <button className="text-primary hover:text-primary/80 transition-colors">
                    <Linkedin className="h-5 w-5 mx-auto" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Departemen Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {teams.map((team, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{team.department}</h3>
                  <p className="text-muted-foreground mb-3">{team.description}</p>
                  <div className="text-sm font-medium text-primary">{team.size}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Budaya Kerja Kami</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Di AETHERA Energy, kami menciptakan lingkungan kerja yang mendukung pertumbuhan, 
            inovasi, dan kolaborasi
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-accent rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Bergabung dengan Tim Kami</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kami selalu mencari talenta terbaik yang passionate tentang energi berkelanjutan 
              dan ingin membuat dampak positif bagi dunia.
            </p>
            <a href="/careers" className="inline-block">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium transition-colors">
                Lihat Posisi Tersedia
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
