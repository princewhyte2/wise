import { Button, Grid, Link, Typography } from "@mui/material"
import DenseAppBar from "../components/AppBar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import GetStartedIllustration from "../components/svg/GetStartedIllustration"
import {
  AmbassadorIllustration,
  DrawerIllustration,
  WalletIllustration,
  WiseSchoolIllustration,
  WiseTeacherIllustration,
} from "../components/illustrations"

export default function Home() {
  return (
    <Box>
      <DenseAppBar />
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12}>
            <Box
              sx={{
                display: { xs: "flex", md: "block", flexDirection: "column", alignItems: "center" },
                padding: { xs: 0, md: 3 },
              }}
            >
              <Typography sx={{ color: "#000066", my: 4 }} variant="h3" component="h3">
                WISE - an initiative to help your child stay safe online.
              </Typography>
              <Typography sx={{ mb: 2 }} variant="caption" component="h6">
                We seek to impart knowledge on staying safe online, and promoting appropriate safety practices amongst
                school-age children between ages 8-17 through online learning modules, quizzes, and surveys.
              </Typography>

              <Button variant="contained">Get Started</Button>
            </Box>
          </Grid>
          <Grid item md={6} sm={12}>
            <Box sx={{ p: 4 }}>
              <GetStartedIllustration />
            </Box>
          </Grid>
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Typography sx={{ color: "#000066", mt: 4 }} variant="h4" component="h4">
            The Wise Initiative
          </Typography>
          <Typography sx={{ mb: 2 }} variant="caption" component="h6">
            Digital Safety Awareness for kids aged 7-18. Be wise.
          </Typography>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Button
                color="secondary"
                variant="outlined"
                sx={{
                  mx: 1,
                  color: "#000066",
                  display: "block",
                  height: "66px",
                  width: "79px",
                  backgroundColor: "#33338433",
                }}
              >
                <Typography sx={{ color: "#000066" }} variant="h3" component="h3">
                  W
                </Typography>
              </Button>
              <Typography sx={{ my: 2 }} variant="caption" component="h6">
                Wisely Assess and Evaluate Websites and Online Content.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Button
                color="secondary"
                variant="outlined"
                sx={{
                  mx: 1,
                  color: "#000066",
                  display: "block",
                  height: "66px",
                  width: "79px",
                  backgroundColor: "#33338433",
                }}
              >
                <Typography sx={{ color: "#000066" }} variant="h3" component="h3">
                  I
                </Typography>
              </Button>
              <Typography sx={{ my: 2 }} variant="caption" component="h6">
                Identify and Avoid Online Bullying, Threats, and Scams.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Button
                color="secondary"
                variant="outlined"
                sx={{
                  mx: 1,
                  color: "#000066",
                  display: "block",
                  height: "66px",
                  width: "79px",
                  backgroundColor: "#33338433",
                }}
              >
                <Typography sx={{ color: "#000066" }} variant="h3" component="h3">
                  S
                </Typography>
              </Button>
              <Typography sx={{ my: 2 }} variant="caption" component="h6">
                Selectively choose what, where, when, how, and with whom to share
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Button
                color="secondary"
                variant="outlined"
                sx={{
                  mx: 1,
                  color: "#000066",
                  display: "block",
                  height: "66px",
                  width: "79px",
                  backgroundColor: "#33338433",
                }}
              >
                <Typography sx={{ color: "#000066" }} variant="h3" component="h3">
                  E
                </Typography>
              </Button>
              <Typography sx={{ my: 2 }} variant="caption" component="h6">
                Empathy and Respect in Online Interactions
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "content" }} item md={7} sm={12}>
            <Box
              sx={{
                display: { xs: "flex", md: "block", flexDirection: "column", alignItems: "center" },
                padding: { xs: 0, md: 3 },
              }}
            >
              <Typography sx={{ color: "#000066", my: 4 }} variant="h3" component="h3">
                The Wise Essay Competition
              </Typography>
              <Typography sx={{ mb: 2 }} variant="caption" component="h6">
                Show your Safety Knowledge and win Fantastic Prizes. We organize essay competitions every year to test
                and reward our students who show their literary prowess. 2022 Theme: Identifying and Preventing
                Cyberbulling Among Secondary School Students in Nigeria.
              </Typography>

              <Link href="#">Click here to submit your essay </Link>
            </Box>
          </Grid>
          <Grid item md={5} sm={12}>
            <Box sx={{ p: 4 }}>
              <WalletIllustration />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={5} sm={12}>
            <Box sx={{ p: 4 }}>
              <DrawerIllustration />
            </Box>
          </Grid>
          <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "content" }} item md={7} sm={12}>
            <Box
              sx={{
                display: { xs: "flex", md: "block", flexDirection: "column", alignItems: "center" },
                padding: { xs: 0, md: 3 },
              }}
            >
              <Typography sx={{ color: "#000066", my: 4 }} variant="h3" component="h3">
                The Wise Digital Safety Training Series
              </Typography>
              <Typography sx={{ mb: 2 }} variant="caption" component="h6">
                We offer specialized training services for students, teachers, parents, and school administrators as
                part of our commitment to promoting digital safety awareness amongst school-age children. We offer both
                online and offline trainings.
              </Typography>

              <Link href="#">Limited slots available, indicate your interest here</Link>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "content" }} item md={7} sm={12}>
            <Box
              sx={{
                display: { xs: "flex", md: "block", flexDirection: "column", alignItems: "center" },
                padding: { xs: 0, md: 3 },
              }}
            >
              <Typography sx={{ color: "#000066", my: 4 }} variant="h3" component="h3">
                Become a Wise Digital Safety Ambassador
              </Typography>
              <Typography sx={{ mb: 2 }} variant="caption" component="h6">
                We are actively focused on creating a community of Digital Safety Ambassadors - who are successful
                graduates of our digital safety training programme . They take on the mantle of leadership to become
                advocates and influencers of a proactive and positive digital culture in their schools and communities.
                We have a goal of inducting 100 ,000 Digital Safety Ambassadors over the next 5 years.
              </Typography>

              <Link href="#">Become a Wise Ambassador today</Link>
            </Box>
          </Grid>
          <Grid item md={5} sm={12}>
            <Box sx={{ p: 4 }}>
              <AmbassadorIllustration />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={5} sm={12}>
            <Box sx={{ p: 4 }}>
              <WiseSchoolIllustration />
            </Box>
          </Grid>
          <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "content" }} item md={7} sm={12}>
            <Box
              sx={{
                display: { xs: "flex", md: "block", flexDirection: "column", alignItems: "center" },
                padding: { xs: 0, md: 3 },
              }}
            >
              <Typography sx={{ color: "#000066", my: 4 }} variant="h3" component="h3">
                Be A Wise School
              </Typography>
              <Typography sx={{ mb: 2 }} variant="caption" component="h6">
                WISE Schools are a step ahead. They move beyond digital literacy and embrace digital citizenship and
                responbility. They train and prepare their students to be confident, kind and aware internet users.
                PARTNER WITH US FOR DIGITAL SAFETY RESOURCES, POLICY, WORKSHOPS AND SEMINARS.
              </Typography>

              <Link href="#">Enroll your school in the Wise Initiative today</Link>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "content" }} item md={7} sm={12}>
            <Box
              sx={{
                display: { xs: "flex", md: "block", flexDirection: "column", alignItems: "center" },
                padding: { xs: 0, md: 3 },
              }}
            >
              <Typography sx={{ color: "#000066", my: 4 }} variant="h3" component="h3">
                Be A Wise Teacher
              </Typography>
              <Typography sx={{ mb: 2 }} variant="caption" component="h6">
                WISE Teachers are aware of digital trends, safety challenges and look for teachable moments to educate
                their students.
              </Typography>

              <Link href="#">Join as a Teacher or recommend WISE to your school</Link>
            </Box>
          </Grid>
          <Grid item md={5} sm={12}>
            <Box sx={{ p: 4 }}>
              <WiseTeacherIllustration />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
