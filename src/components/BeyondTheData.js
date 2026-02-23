import { Box, Typography, Card, Grid } from "@mui/material";
import { MenuBook, Palette } from '@mui/icons-material';

function BeyondTheData() {
    return (
        <Grid container spacing={4} sx={{ mt: 2 }}>
            {/* Currently Reading */}
            <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <MenuBook sx={{ fontSize: 32, color: 'primary.main' }} />
                        <Typography variant="h6" fontWeight="bold">
                            Currently Reading
                        </Typography>
                    </Box>
                    {/* Book 1 */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="body1" fontWeight="medium" sx={{ mb: 1 }}>
                            Lessons in Chemistry
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            by Bonnie Garmus
                        </Typography>
                        <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                            "A brilliant chemist in the 1960s breaks barriers in science and television cooking."
                        </Typography>
                    </Box>

                    {/* Book 2 */}
                    <Box>
                        <Typography variant="body1" fontWeight="medium" sx={{ mb: 1 }}>
                            Vera Wong's Unsolicited Advice for Murderers
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            by Jesse Q. Sutanto
                        </Typography>
                        <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                            "A cozy mystery about a tea shop owner who surprisingly takes solving a murder into her own hands,
                            making friends along the way."
                        </Typography>
                    </Box>
                </Card>
            </Grid>

            {/* Recent Artwork */}
            <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Palette sx={{ fontSize: 32, color: 'primary.main' }} />
                        <Typography variant="h6" fontWeight="bold">
                            Recent Artwork
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            bgcolor: 'grey.200',
                            background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
                            borderRadius: 2,
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src="/painting-sample.png"
                            alt="Recent painting"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                    <Typography variant="body2">
                        I paint to capture motion and energy - windy skies, swaying trees, and the dynamic patterns found in nature.
                    </Typography>
                </Card>
            </Grid>
        </Grid>
    );
}

export default BeyondTheData;