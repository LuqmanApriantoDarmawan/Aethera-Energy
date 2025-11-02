import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Misi Kami",
      description: "Mempercepat transisi energi global menuju masa depan yang lebih bersih dan berkelanjutan melalui teknologi AI yang inovatif.",
    },
    {
      icon: Eye,
      title: "Visi Kami",
      description: "Menjadi pemimpin global dalam solusi energi cerdas dan berkelanjutan yang memberdayakan masyarakat dan industri.",
    },
    {
      icon: Award,
      title: "Komitmen Kualitas",
      description: "Menghadirkan solusi energi dengan standar kualitas tertinggi yang telah teruji dan terpercaya.",
    },
    {
      icon: Heart,
      title: "Kepedulian Lingkungan",
      description: "Setiap keputusan kami didasarkan pada dampak positif terhadap lingkungan dan generasi mendatang.",
    },
  ];

  const milestones = [
    { year: "2020", event: "Pendirian AETHERA Energy dengan fokus pada R&D energi terbarukan" },
    { year: "2021", event: "Peluncuran platform AI pertama untuk optimasi konsumsi energi" },
    { year: "2022", event: "Kemitraan strategis dengan 20+ perusahaan energi nasional" },
    { year: "2023", event: "Ekspansi ke 5 kota besar di Indonesia dengan 50+ klien enterprise" },
    { year: "2024", event: "Penghargaan Best Energy Innovation dari Kementerian ESDM" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-accent/20 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang AETHERA Energy</h1>
            <p className="text-xl text-muted-foreground">
              Kami adalah perusahaan teknologi energi yang berdedikasi untuk menciptakan masa depan energi yang lebih cerdas, bersih, dan berkelanjutan.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Cerita Kami</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                AETHERA Energy lahir dari visi sederhana namun ambisius: menciptakan solusi energi yang tidak hanya efisien, tetapi juga ramah lingkungan. Sebagai perusahaan yang didirikan oleh para ahli energi dan teknologi, kami memahami tantangan yang dihadapi industri dalam transisi menuju energi bersih.
              </p>
              <p className="mb-4">
                Dengan memanfaatkan kekuatan artificial intelligence dan machine learning, kami mengembangkan platform yang mampu memprediksi, mengoptimalkan, dan mengelola konsumsi energi secara real-time. Teknologi kami telah membantu puluhan perusahaan mengurangi konsumsi energi hingga 40% sambil meningkatkan efisiensi operasional mereka.
              </p>
              <p>
                Kami percaya bahwa energi bersih bukan hanya tentang teknologi, tetapi juga tentang menciptakan dampak positif bagi masyarakat dan lingkungan. Itulah mengapa setiap solusi yang kami kembangkan dirancang dengan mempertimbangkan keberlanjutan jangka panjang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Perjalanan Kami</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow pt-3">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
