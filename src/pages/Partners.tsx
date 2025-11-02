import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ExternalLink } from "lucide-react";

const Partners = () => {
  const partners = [
    { name: "PT Energi Nusantara", category: "Strategic Partner", description: "Kolaborasi dalam pengembangan infrastruktur smart grid nasional" },
    { name: "Green Tech Ventures", category: "Investment Partner", description: "Dukungan pendanaan untuk ekspansi dan R&D" },
    { name: "University of Indonesia", category: "Research Partner", description: "Riset bersama dalam teknologi energi terbarukan" },
    { name: "Ministry of Energy", category: "Government Partner", description: "Program transisi energi nasional" },
    { name: "Solar Innovations Inc", category: "Technology Partner", description: "Integrasi teknologi solar panel terbaru" },
    { name: "DataCloud Systems", category: "Technology Partner", description: "Infrastruktur cloud dan data analytics" },
  ];

  const news = [
    {
      date: "15 Jan 2024",
      title: "AETHERA Energy Raih Penghargaan Best Energy Innovation 2024",
      category: "Award",
      description: "Penghargaan dari Kementerian ESDM untuk kontribusi dalam inovasi teknologi energi bersih.",
    },
    {
      date: "10 Jan 2024",
      title: "Kemitraan Strategis dengan 3 Perusahaan Energi Nasional",
      category: "Partnership",
      description: "Kolaborasi untuk mengimplementasikan solusi AI dalam manajemen energi skala enterprise.",
    },
    {
      date: "28 Des 2023",
      title: "Peluncuran Platform AETHERA 2.0",
      category: "Product",
      description: "Fitur baru termasuk predictive maintenance dan advanced analytics dashboard.",
    },
    {
      date: "15 Des 2023",
      title: "Ekspansi ke 5 Kota Besar Indonesia",
      category: "Business",
      description: "Membuka kantor regional di Surabaya, Bandung, Semarang, Medan, dan Makassar.",
    },
    {
      date: "1 Des 2023",
      title: "Program CSR: 100,000 Pohon Ditanam",
      category: "Sustainability",
      description: "Pencapaian program reforestasi di 10 kawasan konservasi di Indonesia.",
    },
    {
      date: "20 Nov 2023",
      title: "Riset AI Energy Published di Journal Internasional",
      category: "Research",
      description: "Paper tentang optimasi energi dengan deep learning dipublikasikan di IEEE.",
    },
  ];

  const certifications = [
    "ISO 9001:2015 - Quality Management",
    "ISO 14001:2015 - Environmental Management",
    "ISO 27001:2013 - Information Security",
    "Green Energy Certified Provider",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-accent/20 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mitra & Berita</h1>
            <p className="text-xl text-muted-foreground">
              Kolaborasi strategis dan pencapaian terkini AETHERA Energy
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="partners" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="partners">Mitra Kami</TabsTrigger>
              <TabsTrigger value="news">Berita & Update</TabsTrigger>
            </TabsList>

            <TabsContent value="partners">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Partner Strategis</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {partners.map((partner, index) => (
                      <Card key={index} className="hover:border-primary transition-colors">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-semibold">{partner.name}</h3>
                            <Badge variant="secondary">{partner.category}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{partner.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Sertifikasi & Akreditasi</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certifications.map((cert, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="font-medium">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="news">
              <div className="space-y-4">
                {news.map((item, index) => (
                  <Card key={index} className="hover:border-primary transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{item.category}</Badge>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {item.date}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Media Kit CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Media & Press</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tertarik untuk meliput AETHERA Energy? Download media kit kami atau hubungi tim PR kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors">
                Download Media Kit
              </button>
              <button className="border border-border hover:bg-accent px-6 py-3 rounded-md font-medium transition-colors">
                Contact PR Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
