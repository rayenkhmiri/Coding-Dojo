#pragma warning disable
using System.ComponentModel.DataAnnotations;

namespace CrudDelicious.Models;
public class Crud
{
    [Key]
    public int AlbumId { get; set; }
    // ---------------------------------------------------
    [Required(ErrorMessage = "Please Provide Album Title.")]
    [MinLength(2, ErrorMessage = "Album title too short .")]
    public string Title { get; set; }
    // ------------------------------------------
    [Required(ErrorMessage = "Please Provide Artist Name.")]
    [MinLength(2, ErrorMessage = "Artist Name too short .")]
    public string Artist { get; set; }
    
    [Required(ErrorMessage = "Please Provide Album Realse Year.")]
    [Range(1800,2024, ErrorMessage ="Please Provide a valid year (between 1800-2024) ")]
    [Display(Name ="Year Of Release")]
    public int ReleaseYear { get; set; }
    // --------------------------------------------
    [Required(ErrorMessage = "Please Provide All Genre.")]
    [MinLength(2, ErrorMessage = "Album Genre too short .")]
    public string Genre { get; set; }
    // --------------------------------------------
    [Required(ErrorMessage = "Please Provide Artist Poster.")]
    [Display(Name = "Poster Image URL")]
    public string PosterUrl { get; set; }
    // -----------------------------------------------
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    // ----------------------------------------------
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}