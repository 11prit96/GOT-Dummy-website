import { Box, Card, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ImagesData from "@/constants/ImagesData";
import Image from "next/image";
import Img1 from "../public/assets/img_1.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GOT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Box
          sx={{
            backgroundImage: "url('/assets/img_1.jpg')",
            objectFit: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "right",
            // backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              variant="body1"
              sx={{ textOverflow: "clip", width: "50%", color: "whitesmoke", textAlign: "center" }}
            >
              George R.R. Martin's best-selling book series "A Song of Ice and
              Fire" is brought to the screen as HBO sinks its considerable
              storytelling teeth into the medieval fantasy epic. It's the
              depiction of two powerful families -- kings and queens, knights
              and renegades, liars and honest men -- playing a deadly game for
              control of the Seven Kingdoms of Westeros, and to sit atop the
              Iron Throne. Martin is credited as a co-executive producer and one
              of the writers for the series, whose shooting locations include
              Northern Ireland, Malta, Croatia and Spain.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: "url('/assets/img_2.jpg')",
            objectFit: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "top left",
            // backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100vh",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body1"
              sx={{ textOverflow: "clip", width: "50%", color: "whitesmoke", textAlign: "center" }}
            >
              Game of Thrones is an American fantasy drama television series
              created by David Benioff and D. B. Weiss for HBO. It is an
              adaptation of A Song of Ice and Fire, a series of fantasy novels
              by George R. R. Martin, the first of which is A Game of Thrones.
              The show was shot in the United Kingdom, Canada, Croatia, Iceland,
              Malta, Morocco, and Spain. It premiered on HBO in the United
              States on April 17, 2011, and concluded on May 19, 2019, with 73
              episodes broadcast over eight seasons.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: "url('/assets/img_3.jpg')",
            objectFit: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "top left",
            // backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100vh",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body1"
              sx={{ textOverflow: "clip", width: "50%", color: "whitesmoke", textAlign: "center" }}
            >
              Set on the fictional continents of Westeros and Essos, Game of
              Thrones has a large ensemble cast and follows several story arcs
              throughout the course of the show. The first major arc concerns
              the Iron Throne of the Seven Kingdoms of Westeros through a web of
              political conflicts among the noble families either vying to claim
              the throne or fighting for independence from whoever sits on it. A
              second focuses on the last descendant of the realm's deposed
              ruling dynasty, who has been exiled to Essos and is plotting to
              return and reclaim the throne. The third follows the Night's
              Watch, a military order defending the realm against threats from
              beyond Westeros's northern border.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: "url('/assets/img_5.jpg')",
            objectFit: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "left",
            // backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100vh",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body1"
              sx={{ textOverflow: "clip", width: "50%", color: "whitesmoke", textAlign: "center" }}
            >
              Game of Thrones attracted a record viewership on HBO and has a
              broad, active, and international fan base. Critics have praised
              the series for its acting, complex characters, story, scope, and
              production values, although its frequent use of nudity and
              violence (including sexual violence) has been subject to
              criticism. The final season received significant critical backlash
              for its reduced length and creative decisions, with many
              considering it a disappointing conclusion. The series received 59
              Primetime Emmy Awards, the most by a drama series, including
              Outstanding Drama Series in 2015, 2016, 2018 and 2019. Its other
              awards and nominations include three Hugo Awards for Best Dramatic
              Presentation, a Peabody Award, and five nominations for the Golden
              Globe Award for Best Television Series – Drama.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
