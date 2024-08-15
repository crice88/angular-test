import { Component } from '@angular/core';
import {ColumnDef} from "@tanstack/angular-table";
import {AlbumService} from "../../core/services/album.service";
import {Album} from "../../core/types/album";
import {albumColumns} from "../../core/table/columns/album";
import {TableComponent} from "../../core/templates/table/table.component";

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})
export class AlbumComponent {
  albums!: Album[];
  columns: ColumnDef<Album>[] = albumColumns;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
    })
  }
}
